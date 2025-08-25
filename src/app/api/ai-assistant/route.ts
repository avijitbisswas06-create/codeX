import { NextResponse } from "next/server";

// AI Provider Configuration
const AI_CONFIG = {
  // Primary: OpenRouter API (anthropic/claude-sonnet-4)
  openRouter: {
    enabled: false, // Set to true when OPENROUTER_API_KEY is provided
    endpoint: "https://openrouter.ai/api/v1/chat/completions",
    model: "anthropic/claude-sonnet-4",
    apiKey: process.env.OPENROUTER_API_KEY
  },
  
  // Fallback: Hugging Face Inference API
  huggingFace: {
    enabled: false, // Set to true when HUGGINGFACE_API_KEY is provided
    endpoint: "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
    apiKey: process.env.HUGGINGFACE_API_KEY
  },
  
  // Backup: Simulated responses (always available)
  simulated: {
    enabled: true
  }
};

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { error: "Message is required" }, 
        { status: 400 }
      );
    }

    let aiResponse: string;
    
    // Try OpenRouter API first (if configured)
    if (AI_CONFIG.openRouter.enabled && AI_CONFIG.openRouter.apiKey) {
      try {
        aiResponse = await callOpenRouterAPI(message);
        return NextResponse.json({ response: aiResponse });
      } catch (error) {
        console.error("OpenRouter API error:", error);
        // Fall through to next provider
      }
    }
    
    // Try Hugging Face API (if configured)
    if (AI_CONFIG.huggingFace.enabled && AI_CONFIG.huggingFace.apiKey) {
      try {
        aiResponse = await callHuggingFaceAPI(message);
        return NextResponse.json({ response: aiResponse });
      } catch (error) {
        console.error("Hugging Face API error:", error);
        // Fall through to simulated response
      }
    }
    
    // Use simulated response as fallback
    aiResponse = generateTravelResponse(message);
    return NextResponse.json({ response: aiResponse });
    
  } catch (error: any) {
    console.error("AI Assistant error:", error);
    return NextResponse.json(
      { error: "Sorry, I'm having trouble responding right now. Please try again." }, 
      { status: 500 }
    );
  }
}

async function callOpenRouterAPI(message: string): Promise<string> {
  const response = await fetch(AI_CONFIG.openRouter.endpoint, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${AI_CONFIG.openRouter.apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
      "X-Title": process.env.NEXT_PUBLIC_APP_NAME || "TravelMarket AI Assistant"
    },
    body: JSON.stringify({
      model: AI_CONFIG.openRouter.model,
      messages: [
        {
          role: "system",
          content: `You are an expert AI travel assistant for TravelMarket. You help travelers with:
- Destination recommendations and travel planning
- Budget planning and cost estimation
- Itinerary creation and activity suggestions
- Travel tips, packing advice, and safety information
- Booking assistance through our marketplace

Always be helpful, friendly, and provide detailed, practical advice. When appropriate, suggest browsing our marketplace for specific services like accommodations, tours, or transportation.`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
      stream: false
    })
  });

  if (!response.ok) {
    throw new Error(`OpenRouter API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again.";
}

async function callHuggingFaceAPI(message: string): Promise<string> {
  const response = await fetch(AI_CONFIG.huggingFace.endpoint, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${AI_CONFIG.huggingFace.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: `Travel Assistant: ${message}`,
      parameters: {
        max_length: 200,
        temperature: 0.7,
        do_sample: true
      }
    })
  });

  if (!response.ok) {
    throw new Error(`Hugging Face API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.generated_text || data[0]?.generated_text || "I apologize, but I couldn't generate a response. Please try again.";
}

function generateTravelResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Travel destination recommendations
  if (lowerMessage.includes('destination') || lowerMessage.includes('where to go') || lowerMessage.includes('recommend')) {
    if (lowerMessage.includes('family')) {
      return "For family travel, I recommend destinations like Orlando (Disney World), Costa Rica for adventure and wildlife, or Japan for cultural experiences. These places offer great activities for all ages and excellent family-friendly accommodations. Would you like specific recommendations for any of these destinations?";
    }
    if (lowerMessage.includes('budget') || lowerMessage.includes('cheap')) {
      return "For budget-friendly destinations, consider Southeast Asia (Thailand, Vietnam), Eastern Europe (Czech Republic, Hungary), or Central America (Guatemala, Nicaragua). These regions offer incredible value with affordable accommodations, food, and activities. What's your approximate budget range?";
    }
    if (lowerMessage.includes('romantic') || lowerMessage.includes('honeymoon')) {
      return "For romantic getaways, I suggest Santorini Greece, Bali Indonesia, Paris France, or the Maldives. Each offers unique romantic experiences - from sunset dinners to couples' spas. What type of romantic atmosphere are you looking for?";
    }
    return "I'd be happy to recommend destinations! To give you the best suggestions, could you tell me: What type of experience are you looking for? (adventure, relaxation, culture, etc.) What's your budget range? And when are you planning to travel?";
  }

  // Budget planning
  if (lowerMessage.includes('budget') || lowerMessage.includes('cost') || lowerMessage.includes('expensive')) {
    if (lowerMessage.includes('europe')) {
      return "For Europe, budget around $100-150/day for mid-range travel including accommodation, meals, and activities. Eastern Europe is more affordable ($50-80/day), while Western Europe can be $120-200/day. I can help you find budget-friendly accommodations and activities on our marketplace!";
    }
    if (lowerMessage.includes('asia')) {
      return "Asia offers great value! Budget $30-60/day in Southeast Asia, $80-120/day in Japan/Korea, and $40-80/day in other Asian countries. This includes accommodation, meals, and local transport. Would you like specific budget breakdowns for any particular country?";
    }
    return "Travel budgets vary greatly by destination and travel style. Generally: Budget travel: $50-80/day, Mid-range: $100-150/day, Luxury: $200+/day. This includes accommodation, meals, activities, and local transport. Which destination are you considering?";
  }

  // Packing advice
  if (lowerMessage.includes('pack') || lowerMessage.includes('luggage') || lowerMessage.includes('what to bring')) {
    if (lowerMessage.includes('tropical') || lowerMessage.includes('beach')) {
      return "For tropical destinations, pack: lightweight, breathable clothing, swimwear, sun protection (hat, sunglasses, SPF 50+), insect repellent, comfortable walking sandals, and a light rain jacket. Don't forget reef-safe sunscreen and a waterproof phone case!";
    }
    return "Packing essentials: versatile clothing that can be layered, comfortable walking shoes, universal adapter, portable charger, first aid kit, and copies of important documents. Pack light and leave room for souvenirs! What's your destination and trip duration?";
  }

  // Best time to visit
  if (lowerMessage.includes('best time') || lowerMessage.includes('when to visit') || lowerMessage.includes('weather')) {
    if (lowerMessage.includes('japan')) {
      return "Best times to visit Japan: Spring (March-May) for cherry blossoms and mild weather, or Fall (September-November) for autumn colors and comfortable temperatures. Summer is hot and humid, winter is cold but great for skiing and hot springs.";
    }
    if (lowerMessage.includes('europe')) {
      return "Best time for Europe: Late spring to early fall (May-September) for warm weather and long days. Summer (June-August) is peak season with crowds and higher prices. Shoulder seasons (April-May, September-October) offer good weather with fewer crowds.";
    }
    return "The best time to visit depends on your destination and preferences. Generally, shoulder seasons offer the best balance of good weather, fewer crowds, and reasonable prices. Which destination are you considering?";
  }

  // Visa and documentation
  if (lowerMessage.includes('visa') || lowerMessage.includes('passport') || lowerMessage.includes('documents')) {
    return "For international travel, you'll typically need: a valid passport (6+ months remaining), appropriate visa (check requirements for your destination), travel insurance, and vaccination certificates if required. I recommend checking your destination's embassy website for the most current requirements. Where are you planning to travel?";
  }

  // Activities and experiences
  if (lowerMessage.includes('activities') || lowerMessage.includes('things to do') || lowerMessage.includes('experiences')) {
    return "I can help you find amazing activities! Our marketplace features tours, adventure sports, cultural experiences, and unique local activities. Popular options include guided city tours, cooking classes, adventure sports, and cultural workshops. What type of experiences interest you most?";
  }

  // Accommodation
  if (lowerMessage.includes('hotel') || lowerMessage.includes('accommodation') || lowerMessage.includes('stay')) {
    return "We have a wide range of accommodations on our marketplace - from luxury resorts to boutique hotels and budget-friendly options. I can help you find the perfect place based on your preferences, budget, and location. What type of accommodation are you looking for?";
  }

  // Transportation
  if (lowerMessage.includes('transport') || lowerMessage.includes('flight') || lowerMessage.includes('getting around')) {
    return "Transportation options vary by destination. Our marketplace includes airport transfers, private drivers, and local transport services. For flights, I recommend booking 6-8 weeks in advance for international travel. Would you like help finding transportation services for your destination?";
  }

  // Safety concerns
  if (lowerMessage.includes('safe') || lowerMessage.includes('safety') || lowerMessage.includes('dangerous')) {
    return "Safety is important when traveling! Research your destination, register with your embassy, keep copies of documents, stay aware of your surroundings, and trust your instincts. Many destinations are very safe for tourists when you take basic precautions. Which destination are you concerned about?";
  }

  // General travel tips
  if (lowerMessage.includes('tips') || lowerMessage.includes('advice') || lowerMessage.includes('help')) {
    return "Here are some essential travel tips: Research your destination, notify banks of travel plans, pack light, stay flexible with plans, learn basic local phrases, respect local customs, and always have backup plans. Our AI assistant and marketplace can help with specific planning needs. What aspect of travel planning would you like help with?";
  }

  // Booking assistance
  if (lowerMessage.includes('book') || lowerMessage.includes('reservation') || lowerMessage.includes('marketplace')) {
    return "I can help you find and book services through our marketplace! We have verified vendors offering accommodations, tours, transportation, and adventure activities worldwide. You can browse by category, location, or budget. Would you like me to help you find specific services?";
  }

  // Default response for general queries
  return `I understand you're asking about "${message}". As your AI travel assistant, I can help with destination recommendations, budget planning, itinerary creation, packing advice, and booking assistance through our marketplace. 

Here are some ways I can assist you:
• Recommend destinations based on your interests and budget
• Help plan detailed itineraries
• Suggest accommodations, tours, and activities
• Provide travel tips and safety advice
• Connect you with verified vendors on our marketplace

What specific aspect of travel planning would you like help with?`;
}

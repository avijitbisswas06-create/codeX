import { useState } from "react";
import { useRouter } from "next/navigation"; // Updated import

interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
}

export default function ServiceManagement() {
  const [services, setServices] = useState<Service[]>([]);
  const [newService, setNewService] = useState<Service>({
    id: "",
    title: "",
    description: "",
    price: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const addService = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const serviceToAdd = { ...newService, id: Date.now().toString() };
      const response = await fetch("/api/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serviceToAdd),
      });

      if (!response.ok) {
        throw new Error("Failed to add service.");
      }

      setServices((prev) => [...prev, serviceToAdd]);
      setNewService({ id: "", title: "", description: "", price: 0 }); // Reset form
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Check for session (mocked for now)
  const sessionId = localStorage.getItem("sessionId");
  if (!sessionId) {
    router.push("/login"); // Redirect to login if not authenticated
  }

  return (
    <div>
      <h1>Manage Your Services</h1>
      {error && <div className="text-red-500">{error}</div>}
      <form onSubmit={addService}>
        <input
          type="text"
          placeholder="Service Title"
          value={newService.title}
          onChange={(e) => setNewService({ ...newService, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Service Description"
          value={newService.description}
          onChange={(e) => setNewService({ ...newService, description: e.target.value })}
          required
        ></textarea>
        <input
          type="number"
          placeholder="Price"
          value={newService.price}
          onChange={(e) => setNewService({ ...newService, price: parseFloat(e.target.value) })}
          required
        />
        <button type="submit">Add Service</button>
      </form>
      <div>
        {services.map((service) => (
          <div key={service.id}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <p>${service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

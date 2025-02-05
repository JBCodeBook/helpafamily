import { useRouter } from "next/router";

function HumanitarianClinicCard() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/create-stripe-session", {
      body: JSON.stringify({
        amount: 30 * 100,
        cause: "1 Patient for $30",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await response.json();
    router.push(result.url);
  };
  return (
  
      <div className="card lg:card-side bordered">
        <div className="card-body">
          <h2 className="card-title">Humanitarian Clinic</h2>
          <p className="mb-3">
          Provide a free, anonymous phone or video telehealth consultation 
          for someone afraid to see a doctor, such as a migrant or refugee 
          who lacks identification.
          </p>
          <p>
            <form onSubmit={handleSubmit}>
              <button className="btn btn-primary">
              Help 1 Patient for $30 <span />
              </button>
            </form>
          </p>
        </div>
      </div>
    
  );
}

export default HumanitarianClinicCard;

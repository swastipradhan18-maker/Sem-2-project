function Feedback() {
  return (
    <div className="feedback">
      <h2>Customer Feedback</h2>

      <form>
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <textarea
          rows="5"
          placeholder="Enter Feedback"
        />

        <button type="submit"
            onClick={() => alert("Thank you for your feedback!")}
        >Submit
        </button>
      </form>
    </div>
  );
}

export default Feedback;
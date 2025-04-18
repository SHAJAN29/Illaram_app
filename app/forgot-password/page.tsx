export default function ForgotPasswordPage() {
  return (
    <div>
      <h2>Forgot Password</h2>
      <form method="POST" action="/api/forgot-password">
        <input name="email" type="email" required />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}

export default function MainLayout({ children }) {
  return (
    <div className="max-w-xl mx-auto p-5 bg-white min-h-screen">
      {children}
    </div>
  );
}

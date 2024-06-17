export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>New</li>
        </ul>
      </nav>
      {children}
    </section>
  );
}

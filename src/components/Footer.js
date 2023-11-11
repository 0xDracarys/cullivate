const Footer = () => {
  return (
    <footer className="py-8 flex flex-col gap-3 items-center bg-rose-200 opacity-75">
      <h2 className="text-2xl font-bold lowercase italic">
        Culli<span className="text-rose-500">Novate</span>
      </h2>
      <p>&copy; {new Date().getFullYear()} Cullinovate.</p>
    </footer>
  );
};

export default Footer;

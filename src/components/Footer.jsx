export default function Footer() {
  // todo : make year dynamic
  return (
    <footer className="mt-4 bg-dark p-2">
      <p className="text-center text-light ">Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );                                                                    /*  display a current year in footer */
}

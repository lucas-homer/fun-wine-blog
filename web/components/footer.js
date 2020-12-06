import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/funwineblog"
            className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          >
            Instagram
          </a>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2"></div>
        </div>
      </Container>
    </footer>
  );
}

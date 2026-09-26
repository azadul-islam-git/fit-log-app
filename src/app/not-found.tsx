import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-black text-primary">404</h1>

      <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>

      <p className="mt-3 max-w-md text-base-content/60">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="btn mt-5 rounded-full border-none bg-lime-400 px-6 py-2.5 font-semibold normal-case text-neutral-900 hover:bg-lime-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

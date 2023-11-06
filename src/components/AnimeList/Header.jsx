import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center py-7">
      <h1 className="text-2xl font-bold text-text200 pl-14"> {title} </h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="text-xl text-text200 underline hover:text-accent100 transition-all pr-14">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;

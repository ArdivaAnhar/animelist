import { HandSwipeLeft, HandSwipeRight } from "@phosphor-icons/react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-5 gap-4 text-text100 text-xl">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="hover:text-accent100 transition-all flex gap-1">
          <HandSwipeLeft size={30} weight="fill" />
          Prev
        </button>
      )}
      <h6>
        Page {page} of {lastPage}
      </h6>
      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="hover:text-accent100 transition-all flex gap-1">
          Next
          <HandSwipeRight size={30} weight="fill" />
        </button>
      )}
    </div>
  );
};

export default Pagination;

interface IPaginationProps {
  totalPosts: number
  postPerPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}
const PaginationComp = ({ postPerPage, totalPosts, setCurrentPage }: IPaginationProps) => {
  const pages = []
  for (let i: number = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i)
  }
  return (
    <div className="flex mb-5 gap-7">
      {pages.map((page) => {
        return (
          <button className="w-8 border border-white rounded-full" key={page} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        )
      })}
    </div>
  )
}

export default PaginationComp

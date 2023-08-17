import { Link } from 'react-router-dom';

function ResultListPaging() {
  return (
    <>
      <div className="pagination">
        <Link to="/" className='first' aria-disabled>처음 페이지</Link>
        <Link to="/" className='prev' aria-disabled>이전 페이지</Link>
        <strong>1</strong>
        <Link to="/">2</Link>
        <Link to="/">3</Link>
        <Link to="/">4</Link>
        <Link to="/">5</Link>
        <Link to="/">6</Link>
        <Link to="/">7</Link>
        <Link to="/">8</Link>
        <Link to="/">9</Link>
        <Link to="/">10</Link>
        <Link to="/" className='next'>다음 페이지</Link>
        <Link to="/" className='last'>마지막 페이지</Link>
      </div>
    </>
  )
}

export default ResultListPaging;

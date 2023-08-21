/* eslint-disable */
import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ResultPageView from '../../common/ResultPageView';
import ResultNoData from '../../common/ResultNoData';
import ResultListPaging from '../../common/ResultListPaging';
import ApprovalPopDetail from '../_ApprovalPopDetail';
import { createPortal } from 'react-dom';

const ModalPortal = ({ children }) => {
  const el = document.getElementById('modal-root');
  return createPortal(children, el)
}

function ApprovalList(props) {
  const location = useLocation();
  const pathData = location.state;
  const { toDetail, currentStatus } = props;
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  useEffect(() => {
    pathData.isDetail = 'yes';
  }, [pathData]);

  const navigate = useNavigate();
  // const selectedWork = () => {
  //   navigate(toDetail, { state: pathData });
  // }

  // 팝업1. 부모 레이아웃 그대로 가지고 새창 띄우기
  const onPopup = () => {
      const url = '/LGHV-UIX-APR/ApprovalPopDetail'
      window.open(url, "_blank", "popup");
  }

  // 팝업2. 새로운 레이아웃으로 새창 띄우기
  const onPopup2 = () => {
      const url = '/NewWindowPopup'
      window.open(url, "_blank", "noopener, noreferrer");
  }

  const [open, setOpen] = useState();

  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    console.log(isOpen);
    setIsOpen(true);
  }

  return (
    <div className='content-section'>
      {/* <button onClick={() => setOpen((o) => !o)}>Toggle Window</button>
      <RenderInWindow open={open} setOpen={setOpen}>
        <h1>Hi There</h1>
        <ApprovalPopDetail />
      </RenderInWindow>
      <br /><br /><br /><br /> */}
      <button onClick={onPopup}>root pop</button>
      {/* { isOpen && (<ModalPortal><ApprovalPopDetail /></ModalPortal>) } */}

      <div className="result-pageview">
        <ResultPageView />
        <div className='btn-wrap'>
          <button type="button" className='btn btn-low btn-md btn-exel'>엑셀</button>
        </div>
      </div>
      {/* 목록 영역 */}
      <table className="table">
        <caption>결재 대기 목록: 등록번호, 등록부서, 작업구분, 등록자, 구역명, 제목, 등록일, 종료일, 완료예정일, 상태</caption>
        <colgroup>
          <col span="3" style={{ width: '8%' }} />
          <col />
          <col span="2" style={{ width: '8%' }} />
          <col span="3" style={{ width: '11%' }} />
          <col style={{ width: '8%' }} />
        </colgroup>
        <thead>
          <tr>
            <th>등록 번호</th>
            <th>작업 구분</th>
            <th>SO</th>
            <th>제목</th>
            <th>등록 부서</th>
            <th>등록자</th>
            <th>등록일</th>
            <th>종료일</th>
            <th>완료예정일</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={onPopup} className='link'>
            <td>WRK11102</td>
            <td>작업관리</td>
            <td>중앙방송</td>
            <td><b>새창 띄우기</b></td>
            <td>서울인프라팀</td>
            <td>홍길동</td>
            <td>2023-01-01 02:00</td>
            <td>2023-01-01 03:00</td>
            <td>2023-01-01 03:00</td>
            <td>{currentStatus}</td>
          </tr>
          <tr onClick={onPopup} className='link'>
            <td>WRK11102</td>
            <td>작업관리</td>
            <td>중앙방송</td>
            <td><b>새창 띄우기</b></td>
            <td>서울인프라팀</td>
            <td>홍길동</td>
            <td>2023-01-01 02:00</td>
            <td>2023-01-01 03:00</td>
            <td>2023-01-01 03:00</td>
            <td>{currentStatus}</td>
          </tr>
        </tbody>
      </table>
      <Link to='/LGHV-UIX-APR/ApprovalPopDetail' target='_blank'>이동</Link>
      <ResultNoData />
      <ResultListPaging />
    </div>
  )
}

const RenderInWindow = ({ open, setOpen, children }) => {
  const _window = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // If open, create window and store in ref
    if (open) {
      _window.current = window.open(
        '',
        '',
        'width=600,height=400,left=200,top=200'
      );

      // Save reference to window for cleanup
      const curWindow = _window.current;

      curWindow.onbeforeunload = () => {
        setReady(false);
        setOpen(false);
      };

      setReady(true);
      // Return cleanup function
    } else {
      _window.current?.close();
      setReady(false);
    }
  }, [open]);

  return (
    open && ready && createPortal(children, _window.current?.document.body)
  );
}

export default ApprovalList;

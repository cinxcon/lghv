import { createPortal } from 'react-dom';
import ContentTitle from '../layout/ContentTitle';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function ApprovalPopDetail() {
  const pagedata = {
    title: '결재관리',
    subtitle: '결제대기함',
    SubMenu: 'yes',
    isDetail: 'yes'
  }

  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <ContentTitle data={pagedata} />
        <h3>결재</h3>
        <table className='table'>
          <caption>결제 라인 정보</caption>
          <colgroup>
            <col style={{ width: '10%' }} />
            <col style={{ width: '20%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '25%' }} />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th scope='col'>구분</th>
              <th scope='col'>결재자</th>
              <th scope='col'>상태</th>
              <th scope='col'>결재일시</th>
              <th scope='col'>의견</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>기안</td>
              <td>홍길동(009900)</td>
              <td>기안</td>
              <td>2023-01-01 11:00:00</td>
              <td></td>
            </tr>
            <tr>
              <td>조정</td>
              <td>정유리(123567)</td>
              <td><span className='color-ongoing'>대기</span></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>결재</td>
              <td>김철수(123456)</td>
              <td><span className="color-success">승인</span></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </PopupPortal>
  )
}

export default ApprovalPopDetail;

import { createPortal } from 'react-dom';
import ResultPageView from '../../common/ResultPageView';
import ResultNoData from '../../common/ResultNoData';
import ResultListPaging from '../../common/ResultListPaging';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function PopupUserGroupSelect() {
  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title flex-wrap between">
          <h2>사용자 그룹 선택</h2>
        </div>
        <div className='content-section search-wrap'>
          <table className='search'>
            <caption>사용자 그룹 선택</caption>
            <colgroup>
              <col style={{ width: '6%' }} />
              <col style={{ width: '35%' }} />
              <col style={{ width: '6%' }} />
              <col style={{ width: '35%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'><label htmlFor='userGroup'>그룹명</label></th>
                <td>
                  <input type='text' name='userGroup' id='userGroup' />
                </td>
                <th scope='row'><label htmlFor="user">담당자</label></th>
                <td>
                  <input type='text' name='user' id='user' />
                </td>
                <td>
                  <div className="btn-wrap right">
                    <button className='btn btn-low btn-ref'>초기화</button>
                    <button className='btn btn-black btn-search-txt'>검색</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='content-section'>
          <div className="result-pageview">
            <ResultPageView />
            <div className='btn-wrap'>
              <span className='ico_check'><b>0</b>개 선택</span>
              <button className='btn btn-md'>확인</button>
            </div>
          </div>
          <table className="table">
            <caption>결재 대기 목록: 등록번호, 등록부서, 작업구분, 등록자, 구역명, 제목, 등록일, 종료일, 완료예정일, 상태</caption>
            <colgroup>
              <col style={{ width: '5%' }} />
              <col span="4" />
              <col style={{ width: '30%' }} />
            </colgroup>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="checked" id="checkedAll" />
                  <label htmlFor="checkedAll" className='invisible'>전체선택</label>
                </th>
                <th>그룹명</th>
                <th>담당자</th>
                <th>활성</th>
                <th>사용자목록</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr className='checked'>
                <td>
                  <input type="checkbox" name="checked" id="checked1" checked />
                  <label htmlFor="checked1" className='invisible'>선택</label>
                </td>
                <td>group01</td>
                <td>gildong</td>
                <td><span className='color-success'>활성화</span></td>
                <td>5</td>
                <td>그룹 설정값 입니다.</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="checked" id="checked2" />
                  <label htmlFor="checked2" className='invisible'>선택</label>
                </td>
                <td>group01</td>
                <td>gildong</td>
                <td><span className='color-disable'>비활성화</span></td>
                <td>5</td>
                <td>그룹 설정값 입니다.</td>
              </tr>
            </tbody>
          </table>
          <ResultNoData />
          <ResultListPaging />
        </div>
      </div>
    </PopupPortal>
  )
}

export default PopupUserGroupSelect;

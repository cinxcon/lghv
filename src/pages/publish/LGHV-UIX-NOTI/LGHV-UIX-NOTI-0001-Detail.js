import { useState, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { Notice } from '../popup/Popup';
import ContentTitle from '../layout/ContentTitle';
import { createPortal } from 'react-dom';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function NoticeRegist() {
  const pagedata1 = {
    title: '공지사항',
    subtitle: '공지사항 상세',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  const pagedata2 = {
    title: '공지사항',
    subtitle: '공지사항 수정',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0');

  const tDate = `${year}-${month}-${date}`;
  const [startDate, setStartDate] = useState(null);
  const [startEndDate, setStartEndDate] = useState(null);

  const [regist, setRegist] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const noticeElementRef = useRef(null);

  const openNotice = () => {
    if (noticeElementRef.current) {
      noticeElementRef.current.classList.remove('close');
    }
    setRegist(true);
  }

  const closeNotice = () => {
    if (noticeElementRef.current) {
      noticeElementRef.current.classList.add('close');
    }
    setRegist(false);
  }
  const onEditNotice = () => {
    setIsEdit(true);
  }
  const onEditConfirm = () => {
    setIsEdit(false);
  }

  return (
  <>
   <PopupPortal>
    <style>
        {`
        #root {display: none;}
        `}
    </style>
    <div className='new-window-wrap'>
        { !isEdit
          ? <ContentTitle data={pagedata1} />
          : <ContentTitle data={pagedata2} />
        }
        { !isEdit
          ? (<div className='content-section' id='view'>
                <table className='table table-row'>
                    <caption>공지사항 정보</caption>
                    <colgroup>
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '40%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '40%' }} />
                    </colgroup>
                    <tbody>
                    <tr>
                        <th scope="row">등록번호</th>
                        <td>T111111110</td>
                        <th scope="row">등록번호</th>
                        <td>2023-09-05</td>
                    </tr>
                    <tr>
                        <th scope="row">팝업여부</th>
                        <td>공지</td>
                        <th scope="row">게시일시</th>
                        <td>2023-09-05 ~ 2023-10-05</td>
                    </tr>
                    <tr>
                        <th scope='row'>등록부서<span className='color-primary'>*</span></th>
                        <td colSpan={3}>기간망운영팀</td>
                    </tr>
                    <tr>
                        <th scope='row'>등록자</th>
                        <td colSpan={3}>홍길동</td>
                    </tr>
                    <tr>
                        <th scope='row'>제목 <span className='color-primary'>*</span></th>
                        <td colSpan={3}>[공지] 23년 디지털 채널 개편 일정</td>
                    </tr>
                    <tr>
                        <th scope='row'>내용</th>
                        <td colSpan={3}>
                            [공지] 23년 디지털 채널 개편 일정에 대하여 안내 드립니다.<br />
                            개편일정<br />
                            2023년 9월 5일 ~ 2023년 10월 5일<br />
                            작업 내용 확인하시고 개별 통보 부탁드립니다.<br />
                            감사합니다.
                        </td>
                    </tr>
                    <tr>
                        <th scope='row'>파일첨부</th>
                        <td colSpan={3}>
                            <ul className='file-list'>
                            <li><button type='button' className='ico_attach'>[공지] 23년 디지털 채널 개편 안내.pdf</button></li>
                            <li><button type='button' className='ico_attach'>[공지] 23년 디지털 채널 개편 안내.hwp</button></li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>)
          : (<div className='content-section' id='edit'>
                <table className='table table-row'>
                    <caption>작업 개요 정보</caption>
                    <colgroup>
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '40%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '40%' }} />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>등록번호</th>
                            <td>T111111121</td>
                            <th>등록일자</th>
                            <td>{tDate}</td>
                        </tr>
                        <tr>
                            <th scope='row'>팝업여부<span className='color-primary'>*</span></th>
                            <td>
                                <input type="radio" name="popup" id="popup_yes" value="popup_yes" />
                                <label htmlFor="popup_yes">공지</label>
                                <input type="radio" name="popup" id="popup_no" value="popup_no" checked />
                                <label htmlFor="popup_no">미공지</label>
                            </td>
                            <th>게시일시</th>
                            <td>
                                <span className='datepickers-wrap'>
                                    <DatePicker locale={ko} selected={startDate} onChange={(date) => setStartDate(date)} startDate={startDate} dateFormat="yyyy-MM-dd" showYearDropdown className="input-datepicker" />
                                    <span className='ml10'> ~ </span>
                                    <DatePicker locale={ko} selected={startEndDate} onChange={(date) => setStartEndDate(date)} startDate={startEndDate} dateFormat="yyyy-MM-dd" showYearDropdown className="input-datepicker ml10" />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>등록부서<span className='color-primary'>*</span></th>
                            <td colSpan={3}>기간망운영팀</td>
                        </tr>
                        <tr>
                            <th scope='row'>등록자</th>
                            <td colSpan={3}>홍길동</td>
                        </tr>
                        <tr>
                            <th scope='row'>제목 <span className='color-primary'>*</span></th>
                            <td colSpan={3}>
                                <input type='text' name='title' id='title' value={'[공지] 23년 디지털 채널 개편 일정'} placeholder='제목' />
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>내용</th>
                            <td colSpan={3}>
                                <CKEditor
                                    editor={ CustomEditor }
                                    data="<p>[공지] 23년 디지털 채널 개편 일정에 대하여 안내 드립니다.</p><p>개편일정</p><p>2023년 9월 5일 ~ 2023년 10월 5일</p><p>작업 내용 확인하시고 개별 통보 부탁드립니다.</p><p>감사합니다.</p>"
                                    onReady={ editor => {
                                    // You can store the "editor" and use when it is needed
                                      console.log('Editor is ready to use!', editor);
                                    } }
                                    onChange={ (event, editor) => {
                                      const data = editor.getData();
                                      console.log({ event, editor, data });
                                    } }
                                    onBlur={ (event, editor) => {
                                      console.log('Blur.', editor);
                                    } }
                                    onFocus={ (event, editor) => {
                                      console.log('Focus.', editor);
                                    } }
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>파일첨부</th>
                            <td colSpan={3}>
                                <input type="file"id="File"name="File"className="form-file"style={{ width: '100%', display: 'none' }} title="파일첨부" />
                                <div className="input-group file-attach flex-wrap between"style={{ width: '100%' }} >
                                    <input type="text"className="i-file-name"id="noIndex1"title="파일첨부"readOnly=""/>
                                    <span className="input-addon">
                                        <label htmlFor="File" className="btn">찾아보기</label>
                                    </span>
                                    <span className="input-addon">
                                        <button className="btn btn-low">추가</button>
                                    </span>
                                    <span className="input-addon">
                                        <button className="btn btn-low">삭제</button>
                                    </span>
                                </div>
                                <ul className='list-desc'>
                                    <li>구성도, 상세 시나리오 등을 첨부(예시)</li>
                                    <li className='color-primary'>업로드 할 수 있는 파일의 용량은 총 20MB 입니다.</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>)
        }
        <div className="detail-bottom-btn-group">
            { !isEdit
              ? (<div><button className="btn btn-lg btn-low" onClick={openNotice}>미리보기</button> <button className="btn btn-lg btn-primary" onClick={onEditNotice}>수정</button></div>)
              : <button className="btn btn-lg btn-primary" onClick={onEditConfirm}>수정</button>}
            <div className="notice-pop close" ref={noticeElementRef}>
            <Notice open={regist} close={closeNotice} header="[공지] 23년 디지털 채널 개편 일정" id={'T111111110'} >
                [공지] 23년 디지털 채널 개편 일정에 대하여 안내 드립니다.<br />
                개편일정<br />
                2023년 9월 5일 ~ 2023년 10월 5일<br />
                작업 내용 확인하시고 개별 통보 부탁드립니다.<br />
                감사합니다.
            </Notice>
            </div>
        </div>
    </div>
    </PopupPortal>
    </>)
}

export default NoticeRegist;

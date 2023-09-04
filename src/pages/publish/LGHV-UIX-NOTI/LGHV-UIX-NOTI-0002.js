import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
import { Alert } from '../popup/Popup';
import ContentTitle from '../layout/ContentTitle';
import Select from 'react-select';

function NoticeRegist() {
  const pagedata = {
    title: '공지사항',
    subtitle: '공지사항 등록',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  const [regist, setRegist] = useState(false);

  // 윈도우 팝업
  const onPopup = (url, name, width, height) => {
    const popupWidth = width;
    const popupHeight = height;
    const popupX = (window.screen.width / 2) - (popupWidth / 2);
    const popupY = (window.screen.height / 2) - (popupHeight / 2);
    window.open(url, name, 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY);
  }

  // 셀렉트 박스
  const optionDisState = [
    { value: 'Y', label: 'Y' },
    { value: 'N', label: 'N' }
  ];
  const [disState, setDisState] = useState(optionDisState[0]);

  return (
  <>
   <ContentTitle data={pagedata} />
    <div className='content-section'>
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
                <th scope="row"><label htmlFor="display">노출여부</label></th>
                  <td colSpan={3}>
                    <Select defaultValue={optionDisState[0]} value={disState} onChange={setDisState} options={optionDisState} className='react-select-container w50' classNamePrefix="react-select" />
                  </td>
                </tr>
                <tr>
                    <th scope='row'>공지여부<span className='color-primary'>*</span></th>
                    <td colSpan={3}>
                        <fieldset>
                            <legend>대상 서비스</legend>
                            <input type="radio" name="notify" id="notify_yes" value="notify_yes" checked />
                            <label htmlFor="notify_yes">공지</label>
                            <input type="radio" name="notify" id="notify_no" value="notify_no" />
                            <label htmlFor="notify_no">미공지</label>
                        </fieldset>
                    </td>
                </tr>
                <tr>
                    <th scope='row'>팝업여부<span className='color-primary'>*</span></th>
                    <td colSpan={3}>
                        <fieldset>
                            <legend>대상 서비스</legend>
                            <input type="radio" name="popup" id="popup_yes" value="popup_yes" />
                            <label htmlFor="popup_yes">공지</label>
                            <input type="radio" name="popup" id="popup_no" value="popup_no" checked />
                            <label htmlFor="popup_no">미공지</label>
                        </fieldset>
                    </td>
                </tr>
                <tr>
                    <th scope='row'>등록부서<span className='color-primary'>*</span></th>
                    <td colSpan={3}>
                        <span className='input w50'></span>
                        <button className='btn btn-search ml10' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>조회</button>
                    </td>
                </tr>
                <tr>
                    <th scope='row'>등록자</th>
                    <td colSpan={3}><input type='text' name='title' id='title' placeholder='' className='w50' /></td>
                </tr>
                <tr>
                    <th scope='row'>제목 <span className='color-primary'>*</span></th>
                    <td colSpan={3}>
                        <input type='text' name='title' id='title' placeholder='제목' />
                    </td>
                </tr>
                <tr>
                    <th scope='row'>내용</th>
                    <td colSpan={3}>
                        <CKEditor
                                editor={ CustomEditor }
                                data="<p>Hello from CKEditor 5!</p>"
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
                            <li className='color-primary'>업로드 할 수 있는 파일의 용량은 총 20MB 입니다.</li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    <div className="detail-bottom-btn-group">
        <button className="btn btn-lg btn-low">목록</button>
        <button className="btn btn-lg btn-primary" onClick={() => { setRegist(true) }}>등록</button>
        <Alert open={regist} close={() => { setRegist(false) }}>
          <div>작업을 등록 하시겠습니까?</div>
        </Alert>
    </div>

    </>)
}

export default NoticeRegist;

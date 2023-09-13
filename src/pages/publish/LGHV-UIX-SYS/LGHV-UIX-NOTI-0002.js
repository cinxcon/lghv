import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { Alert } from '../popup/Popup';
import ContentTitle from '../layout/ContentTitle';

function NoticeRegist() {
  const pagedata = {
    title: '공통관리',
    subtitle: '공지사항 등록',
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
  const [fileRows, setFileRows] = useState([]);
  const fileAddRow = () => {
    setFileRows([...fileRows, {}]);
  };
  const fileRemoveRow = () => {
    if (fileRows.length > 0) {
      const newRows = fileRows.slice(0, fileRows.length - 1);
      setFileRows(newRows);
    }
  };
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
                        <div className='file-wrap'>
                            <input type="file"id="File"name="File"className="form-file"style={{ width: '100%', display: 'none' }} title="파일첨부" />
                            <div className="input-group file-attach flex-wrap between"style={{ width: '100%' }} >
                                <input type="text"className="i-file-name"id="noIndex1"title="파일첨부"readOnly=""/>
                                <span className="input-addon">
                                    <label htmlFor="File" className="btn">찾아보기</label>
                                </span>
                                <span className="input-addon">
                                    <button className="btn btn-low" onClick={fileAddRow}>추가</button>
                                </span>
                                <span className="input-addon">
                                    <button className="btn btn-low" onClick={fileRemoveRow}>삭제</button>
                                </span>
                            </div>
                        </div>
                        {fileRows.map((fileRows, index) => (
                            <div className='file-wrap mt8' key={index}>
                                <input type="file"id="File"name="File"className="form-file"style={{ width: '100%', display: 'none' }} title="파일첨부" />
                                <div className="input-group file-attach flex-wrap between"style={{ width: '100%' }} >
                                    <input type="text"className="i-file-name"id="noIndex1"title="파일첨부"readOnly=""/>
                                    <span className="input-addon">
                                        <label htmlFor="File" className="btn">찾아보기</label>
                                    </span>
                                    <span className="input-addon">
                                    <button className="btn btn-low" onClick={fileAddRow}>추가</button>
                                    </span>
                                    <span className="input-addon">
                                        <button className="btn btn-low" onClick={fileRemoveRow}>삭제</button>
                                    </span>
                                </div>
                            </div>
                        ))}
                        <ul className='list-desc'>
                            <li>구성도, 상세 시나리오 등을 첨부(예시)</li>
                            <li className='color-primary'>업로드 할 수 있는 파일의 용량은 총 20MB 입니다.</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="detail-bottom-btn-group">
        <button className="btn btn-lg btn-low">목록</button>
        <button className="btn btn-lg btn-primary" onClick={() => { setRegist(true) }} type={'no'}>수정</button>
    </div>
    <Alert open={regist} close={() => { setRegist(false) }}>
        <h3>공지사항이 등록되었습니다.</h3>
        <ul className='list-desc'>
            <li className='color-primary'>* 등록된 공지사항은 공지사항 목록에서 확인하세요.</li>
        </ul>
    </Alert>
 </>)
}

export default NoticeRegist;

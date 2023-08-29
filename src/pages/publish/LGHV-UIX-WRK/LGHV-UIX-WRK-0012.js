import { useState, useEffect } from 'react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Alert } from '../popup/Popup';
import ContentTitle from '../layout/ContentTitle';

function NomalWork() {
  const pagedata = {
    title: '템플릿생성',
    subtitle: '템플릿 목록',
    SubMenu: 'yes'
  }
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0');
  const tDate = `${year}-${month}-${date}`;

  const [cancle, setCancle] = useState(false);
  const [regist, setRegist] = useState(false);

  const [templateType, setTemplateType] = useState('');
  const handleTemplateTypeChange = (event) => {
    setTemplateType(event.target.value);
  };

  const [initialHtml, setEditorData] = useState('');

  useEffect(() => {
    // Fetch the contents of the sample.html file
    fetch('../data/sample.html')
      .then(response => response.text())
      .then(data => setEditorData(data))
      .catch(error => console.error('Error fetching HTML:', error));
  }, []);

  //   const initialHtml = '<h4>가. 작업 일반</h4><div class="box"><dl><dt>작업명</dt><dd></dd></dl></div>'

  return (
  <>
   <ContentTitle data={pagedata} />
      <div className='content-section'>
        <table className='table table-row'>
            <caption>템플릿 리스트</caption>
                <colgroup>
                <col style={{ width: '10%' }} />
                <col style={{ width: '40%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '40%' }} />
                </colgroup>
            <tbody>
                <tr>
                <th scope="row"><label htmlFor="type">분류</label></th>
                    <td>
                    <span className='service select-wrap'>
                        <input type="text" list="type" value={templateType} onChange={handleTemplateTypeChange} placeholder="작업신청" />
                        <datalist id="type">
                            <option value={'작업신청'} />
                            <option value={'보고'} />
                        </datalist>
                    </span>
                    </td>
                    <th scope="row">등록일</th>
                    <td>
                    {tDate}
                    </td>
                </tr>
                    <tr>
                <th scope="row"><label htmlFor="type">양식명</label></th>
                    <td colSpan={5}>
                        <input type="text" />
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    <div className='content-section'>
        <div>
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
                    <th scope='row'>작업 내용</th>
                    <td colSpan={3}>
                        <div className='work-content'>
                            <div className='template'>
                                <CKEditor
                                editor={ CustomEditor }
                                data={initialHtml}
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
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="detail-bottom-btn-group">
        <button className="btn btn-lg btn-low" onClick={() => { setCancle(true) }}>취소</button>
        <Alert open={cancle} close={() => { setCancle(false) }} >
          <div>취소 하시겠습니까?</div>
        </Alert>
        <button className="btn btn-lg btn-primary" onClick={() => { setRegist(true) }}>등록</button>
        <Alert open={regist} close={() => { setRegist(false) }}>
          <div>작업을 등록 하시겠습니까?</div>
        </Alert>
    </div>

    </>)
}

export default NomalWork;
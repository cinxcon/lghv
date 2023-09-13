import { useState, useEffect } from 'react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Alert } from '../popup/Popup';
import ContentTitle from '../layout/ContentTitle';
import { createPortal } from 'react-dom';
import Select from 'react-select';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function TemplateDetail() {
  const pagedata = {
    title: '템플릿생성',
    subtitle: '템플릿 상세',
    SubMenu: 'yes'
  }
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0');
  const tDate = `${year}-${month}-${date}`;

  const [cancle, setCancle] = useState(false);
  const [regist, setRegist] = useState(false);

  const optionsTemplateType = [
    { value: 'all', label: '전체' },
    { value: '작업신청', label: '작업신청' }
  ];
  const [templateType, setTemplateType] = useState(optionsTemplateType[0]);

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
        <PopupPortal>
            <style>
                {`
                #root {display: none;}
                `}
            </style>
            <div className='new-window-wrap'>
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
                            <th scope="row"><label htmlFor="type">템플릿 분류</label></th>
                                <td>
                                    <Select defaultValue={optionsTemplateType[0]} value={templateType} onChange={setTemplateType} options={optionsTemplateType} className='react-select-container' classNamePrefix="react-select" />
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
            </div>
        </PopupPortal>
    </>)
}

export default TemplateDetail;

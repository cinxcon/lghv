import { useState } from 'react';
import Select from 'react-select';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
import ContentTitle from '../layout/ContentTitle';
import { Popup, Alert } from '../popup/Popup';
import { PopupNotiMethod } from '../popup/popupDetail/Popup_NotiMethod';
import PopupTemplate from '../popup/popupDetail/Popup_Template';

function DisabilityMngReg() {
  const pagedata = {
    title: '장애관리',
    subtitle: '장애등록',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  //  토글
  const [divStates, setDivStates] = useState([false, false]);
  const handleDivToggle = (index) => {
    const newDivStates = [...divStates];
    newDivStates[index] = !newDivStates[index];
    setDivStates(newDivStates);
  };
  // 템플릿
  const [template, setTemplate] = useState(false);
  const handleTemplateSelected = () => {
    setTemplate(false);
  }
  // 버튼
  const [notimethod, setNotimethod] = useState(false);
  const [workCancel, setWorkCancel] = useState();
  const [regist, setRegist] = useState(false);
  // 윈도우 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }
  // SelectBox
  const optionInfraType = [
    { value: '서울인프라팀', label: '서울인프라팀' },
    { value: '경북인프라팀', label: '경북인프라팀' }
  ];
  const [infraType, setInfraType] = useState(optionInfraType[0]);
  const optionSoType = [
    { value: '중앙방송', label: '중앙방송' },
    { value: '중부산방송', label: '중부산방송' }
  ];
  const [soType, setSoType] = useState(optionSoType[0]);

  return (
    <>
      <ContentTitle data={pagedata} />
      <div className="detail-top-btn-group flex-wrap between">
        <div className='color-primary size-sm left'>(*) 는 필수입력 항목입니다.</div>
        <div>
          <button className='btn btn-pop'>불러오기</button>
          <button className='btn btn-pop' onClick={() => { setNotimethod(true) }}>통보방법</button>
          <button className='btn btn-ref'>새로작성</button>
          <button className='btn btn-temp'>임시저장</button>
        </div>
      </div>
      <Popup open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
        <PopupNotiMethod />
      </Popup>
      <div className='content-section'>
        <div className={`flex-wrap between ${divStates[0] ? 'under-line' : ''}`}>
          <h3>기본 정보</h3>
          <div className="btn-wrap">
            <button className={`btn-fold ${divStates[0] ? 'close' : ''}`} onClick={() => handleDivToggle(0)} id='fold-open'>기본 정보 열기</button>
          </div>
        </div>
        <div className={`toggle-box ${divStates[0] ? 'hide' : ''} `}>
          <table className='table table-row'>
            <caption>기본 정보</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col style={{ width: '35%' }} />
              <col style={{ width: '15%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>인프라팀/SO <span aria-label="required" className='color-primary'>*</span></th>
                <td colSpan={3}>
                  <div className='flex-wrap between'>
                    <span className='half'>
                      <Select defaultValue={optionInfraType[0]} value={infraType} onChange={setInfraType} options={optionInfraType} className='react-select-container' classNamePrefix="react-select" />
                    </span>
                    <span className='half'>
                      <Select defaultValue={optionSoType[0]} value={soType} onChange={setSoType} options={optionSoType} className='react-select-container' classNamePrefix="react-select" />
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>제목 <span aria-label="required" className='color-primary'>*</span></th>
                <td colSpan={3}>
                  <input type='text' name='title' id='title' placeholder='작업제목' />
                </td>
              </tr>
              <tr>
                <th scope='row'>처리부서 <span aria-label="required" className='color-primary'>*</span></th>
                <td colSpan={3}>
                  <span className='input-btn-wrap'>
                    <span className='input input_org nput-search-front'></span>
                    <button className='btn btn-search' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>조회</button>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope='row'>등록자 <span aria-label="required" className='color-primary'>*</span></th>
                <td>홍길동</td>
                <th scope='row'>등록일 <span aria-label="required" className='color-primary'>*</span></th>
                <td>2023-08-16 11:00:00</td>
              </tr>
              <tr>
                <th scope='row'>대상 서비스 <span aria-label="required" className='color-primary'>*</span></th>
                <td colSpan={3}>
                  <fieldset>
                    <legend>대상 서비스</legend>
                    <input type="checkbox" name="service" id="ser_1" value="" />
                    <label htmlFor="ser_1">DTV</label>
                    <input type="checkbox" name="service" id="ser_2" value="" />
                    <label htmlFor="ser_2">NET</label>
                    <input type="checkbox" name="service" id="ser_3" value="" />
                    <label htmlFor="ser_3">VOIP</label>
                    <input type="checkbox" name="service" id="ser_4" value="" />
                    <label htmlFor="ser_4">ATV</label>
                    <input type="checkbox" name="service" id="ser_5" value="" />
                    <label htmlFor="ser_5" className='color-info'>VOD</label>
                    <input type="checkbox" name="service" id="ser_6" value="" />
                    <label htmlFor="ser_6" className='color-info'>ESS</label>
                    <input type="checkbox" name="service" id="ser_7" value="" />
                    <label htmlFor="ser_7" className='color-info'>클라우드</label>
                    <input type="checkbox" name="service" id="ser_8" value="" />
                    <label htmlFor="ser_8" className='color-info'>전송망</label>
                    <input type="checkbox" name="service" id="ser_9" value="" />
                    <label htmlFor="ser_9" className='color-info'>국간망</label>
                    <input type="checkbox" name="service" id="ser_10" value="" />
                    <label htmlFor="ser_10" className='color-info'>기간망</label>
                    <input type="checkbox" name="service" id="ser_11" value="" />
                    <label htmlFor="ser_11" className='color-info'>기반</label>
                    <input type="checkbox" name="service" id="ser_12" value="" />
                    <label htmlFor="ser_12" className='color-info'>기타</label>
                    <span className='color-info'>
                      ( <input type="checkbox" name="service" id="ser_13" value="" />
                      <label htmlFor="ser_13" className='color-info'>전체</label> )
                    </span>
                  </fieldset>
                  <ul className='list-desc'>
                    <li className='color-info'>청색 표기 대상 서비스만 선택 할 경우, 작업대상 지역은 [해당없음]으로 지정하십시오.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th scope='row'>장애내용 <span aria-label="required" className='color-primary'>*</span></th>
                <td colSpan={3}>
                  <div className='work-content'>
                    <div className='btn-wrap'>
                      <button type='button' className='btn btn-md btn-pop' onClick={() => { onPopup('/popup/PopupTemplate', 'Template', 1280, 800) }}>템플릿 불러오기</button>
                      <Popup open={template} close={() => { setTemplate(false) }} header="템플릿 불러오기" type={'lg'}>
                        <PopupTemplate onItemSelected={handleTemplateSelected} />
                      </Popup>
                    </div>
                    <div className='template over-flow-y'>
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
                    </div>
                  </div>
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
        </div>
      </div>
      <div className='content-section'>
        <div className={`flex-wrap between ${divStates[1] ? 'under-line' : ''}`}>
          <h3>장애 지역</h3>
          <div className="btn-wrap">
            <button className={`btn-fold ${divStates[1] ? 'close' : ''}`} onClick={() => handleDivToggle(1)} id='fold-open'>장애 지역 열기</button>
          </div>
        </div>
        <div className={`toggle-box ${divStates[1] ? 'hide' : ''} `}>
          <table className='table table-row'>
            <caption>장애 지역</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>장애 지역 및 가입자 <span aria-label="required" className='color-primary'>*</span></th>
                <td>강원인프라팀/영동방송</td>
              </tr>
              <tr>
                <th scope='row'>가입자 수</th>
                <td>
                  <div className='flex-wrap'>
                    <span className='input-wrap'>
                      <span>DTV</span>
                      <input type='text' value={0} />
                    </span>
                    <span className='input-wrap'>
                      <span>NET</span>
                      <input type='text' value={4} />
                    </span>
                    <span className='input-wrap'>
                      <span>VOIP</span>
                      <input type='text' value={6} />
                    </span>
                    <span className='input-wrap'>
                      <span>ATV</span>
                      <input type='text' value={0} />
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='detail-bottom-btn-group'>
        <button className='btn btn-lg' onClick={() => { setWorkCancel(true) }}>취소</button>
        <button className='btn btn-lg btn-primary' onClick={() => { setRegist(true) }}>등록</button>
      </div>
      <Alert open={workCancel} close={() => { setWorkCancel(false) }}>
        <div>등록을 취소 하시겠습니까?</div>
      </Alert>
      <Alert open={regist} close={() => { setRegist(false) }}>
        <div>장애를 등록 하시겠습니까?</div>
      </Alert>
    </>
  );
};
export default DisabilityMngReg;

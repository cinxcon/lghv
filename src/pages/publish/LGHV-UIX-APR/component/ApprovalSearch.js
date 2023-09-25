import { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';

function ApprovalSearch() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [endeDate, setEndeDate] = useState(new Date());
  const [compDate, setCompDate] = useState(new Date());

  //  토글
  const [isToggled, setToggled] = useState(false);
  const handleButtonToggle = () => {
    setToggled(prevState => !prevState);
  };

  // 날짜 선택
  const [selectedStday, setSelectedStday] = useState('st_user');
  const handleStdayChange = (event) => {
    setSelectedStday(event.target.value);
    const currentDate = new Date();
    // 오늘 날짜
    if (event.target.value === 'st_user') {
      setStartDate(null);
      setEndDate(null);
    }
    // 오늘 날짜
    if (event.target.value === 'st_day') {
      setStartDate(new Date());
      setEndDate(new Date());
    }
    // 1주일 전부터 오늘까지의 기간
    if (event.target.value === 'st_week') {
      const weekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      setStartDate(weekAgo);
      setEndDate(new Date());
    }
    // 1개월 전부터 오늘까지의 기간
    if (event.target.value === 'st_month') {
      const oneMonthAgo = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        new Date().getDate()
      );
      setStartDate(oneMonthAgo);
      setEndDate(new Date());
    }
  };

  // SelectBox
  const optionSo = [
    { value: '전체', label: '전체' },
    { value: '중앙방송  ', label: '중앙방송  ' },
    { value: '중부산방송', label: '중부산방송' }
  ];
  const [so, setSo] = useState(optionSo[0]);

  return (
    <div className='content-section'>
      <div className='search-wrap'>
        <div className='title flex-wrap between'>
          <h3>검색 조건</h3>
          <button className={`btn-fold ${isToggled ? 'close' : ''}`} onClick={handleButtonToggle} id='fold-open'>검색영역 열기</button>
        </div>
        <div className={`toggle-box ${isToggled ? 'hide' : ''}`}>
          <table className='search'>
            <caption>제목, 등록번호, 등록자, 구분, 구역명 항목 검색 영역</caption>
            <colgroup>
              <col style={{ width: '6%' }} />
              <col style={{ width: '28%' }} />
              <col style={{ width: '6%' }} />
              <col style={{ width: '28%' }} />
              <col style={{ width: '6%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><label htmlFor="subjec">제목</label></th>
                <td>
                  <input type="text" name="subject" id="subjec" />
                </td>
                <th scope="row"><label htmlFor="regnum">등록번호</label></th>
                <td>
                  <input type="text" name="regnum" id="regnum" />
                  <span className='search-error-msg'>숫자만 입력하세요.</span>
                </td>
                <th scope="row"><label htmlFor="registrant">등록자</label></th>
                <td>
                  <input type="text" name="registrant" id="registrant" />
                </td>
              </tr>
              <tr>
                <th scope="row">구분</th>
                <td>
                  <fieldset>
                    <legend>구분</legend>
                    <input type="checkbox" name="division" id="div_1" value="" checked />
                    <label htmlFor="div_1">작업관리</label>
                    <input type="checkbox" name="division" id="div_2" value="" checked />
                    <label htmlFor="div_2">장애관리</label>
                    <input type="checkbox" name="division" id="div_3" value="" checked />
                    <label htmlFor="div_3">사용자관리</label>
                    <input type="checkbox" name="division" id="div_4" value="" checked />
                    <label htmlFor="div_4">장비관리</label>
                  </fieldset>
                </td>
                <th scope="row"><label htmlFor="SO">구역명</label></th>
                <td className='bd-right-none'>
                  <Select defaultValue={optionSo[0]} value={so} onChange={setSo} options={optionSo} className='react-select-container' classNamePrefix="react-select" />
                </td>
                <td colSpan={2}></td>
              </tr>
            </tbody>
          </table>
          <table className='search'>
            <caption>등록일, 종료일, 완료예정일 항목 검색 영역</caption>
            <colgroup>
              <col style={{ width: '6%' }} />
              <col />
              <col style={{ width: '6%' }} />
              <col style={{ width: '18%' }} />
              <col style={{ width: '6%' }} />
              <col style={{ width: '18%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><label htmlFor="regdate">등록일</label></th>
                <td>
                  <div className='flex-wrap between'>
                    <span className='datepickers-wrap'>
                      <span><DatePicker locale={ko} selected={startDate} onChange={(date) => setStartDate(date)} startDate={startDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                      ~
                      <span><DatePicker locale={ko} selected={endDate} onChange={(date) => setEndDate(date)} startDate={endDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                    </span>
                    <span className='radiobtn-wrap'>
                      <fieldset>
                        <legend>날짜 선택</legend>
                          <input type='radio' name='start-date' id='st_day' value="st_day" checked={selectedStday === 'st_day'} onChange={handleStdayChange}/>
                          <label htmlFor='st_day' className='type-btn'>하루</label>
                          <input type='radio' name='start-date' id='st_week' value="st_week" checked={selectedStday === 'st_week'} onChange={handleStdayChange}/>
                          <label htmlFor='st_week' className='type-btn'>일주일</label>
                          <input type='radio' name='start-date' id='st_month' value="st_month" checked={selectedStday === 'st_month'} onChange={handleStdayChange}/>
                          <label htmlFor='st_month' className='type-btn'>한달</label>
                          <input type='radio' name='start-date' id='st_user' value="st_user" checked={selectedStday === 'st_user'} onChange={handleStdayChange}/>
                          <label htmlFor='st_user' className='type-btn'>사용자입력</label>
                        </fieldset>
                    </span>
                  </div>
                </td>
                <th scope="row"><label htmlFor="findate">종료일</label></th>
                <td>
                  <span className='input-btn-wrap'>
                    <DatePicker selected={endeDate} onChange={(date) => setEndeDate(date)} isClearable />
                  </span>
                </td>
                <th scope="row"><label htmlFor="compdate">완료예정일</label></th>
                <td>
                  <span className='input-btn-wrap'>
                    <DatePicker selected={compDate} onChange={(date) => setCompDate(date)} isClearable />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="btn-wrap right">
            <button className='btn btn-low btn-ref'>초기화</button>
            <button className='btn btn-black btn-search-txt'>검색</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApprovalSearch;

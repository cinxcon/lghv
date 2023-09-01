import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle';

function SysSendBlockingMemberTxtMsgLog() {
  const pagedata = {
    title: '로그 관리',
    subtitle: '장애발생서비스 가입자 문자발송',
    SubMenu: 'yes'
  }
  const [selectedOption, setSelectedOption] = useState('activation_off');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <ContentTitle data={pagedata} />
      <h4 className='color-primary mb15'>(*)는 필수 입력 항목 입니다.</h4>
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
            <th scope='row'>활성여부 <span className='color-primary'>*</span></th>
            <td colSpan={3}>
                <fieldset>
                    <legend>활성여부</legend>
                    <input type="radio" name="activation" id="activation_off" value="activation_off" checked={selectedOption === 'activation_off'} onChange={handleOptionChange} />
                    <label htmlFor="activation_off">OFF</label>
                    <input type="radio" name="activation" id="activation_on" value="activation_on" checked={selectedOption === 'activation_on'} onChange={handleOptionChange} />
                    <label htmlFor="activation_on">ON</label>
                </fieldset>
            </td>
        </tr>
        </tbody>
      </table>

    </>
  )
}
export default SysSendBlockingMemberTxtMsgLog;

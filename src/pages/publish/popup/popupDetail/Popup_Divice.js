import { useState } from 'react';

const SelectDivece = ({ onItemSelected }) => {
  const data = [
    {
      name: 'Infra Core1',
      type: 'Proxy',
      model: 'Linux',
      address: '192.16.189.11',
      portStatus: 'SSH, Telnet, SFTP, FTP',
      status: 'Connected'
    },
    {
      name: 'Infra Core2',
      type: 'Proxy',
      model: 'HPUX',
      address: '192.16.189.11',
      portStatus: 'SSH',
      status: 'Connected'
    },
    {
      name: 'Infra Core3',
      type: 'Proxy',
      model: 'HPUX',
      address: '192.16.189.11',
      portStatus: 'SSH',
      status: 'Connected'
    }
  ];

  const diviceSearch = () => {
    // 장비 검색
  }

  const [selectedItems, setSelectedItems] = useState([]); // 선택한 항목들의 인덱스를 저장하는 배열

  const handleCheckboxChange = (event, index) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedItems([...selectedItems, index]);
    } else {
      setSelectedItems(selectedItems.filter(itemIndex => itemIndex !== index));
    }
  };
  const selectedNames = selectedItems.map(index => data[index].name);

  const handleConfirmClick = () => {
    // 장비 선택
    onItemSelected(selectedNames);
  }

  return (
    <>
        <div className='pop-search-wrap'>
            <table className='popup-table left'>
            <caption>제목, 등록번호, 등록자, 등록부서, 등록일, 종료일, 구역명, 완료예정일, 구분 항목의 검색 영역</caption>
                <colgroup>
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '40%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '40%' }} />
                </colgroup>
            <tbody>
                <tr>
                    <th scope="row"><label htmlFor='name'>이름</label></th>
                <td>
                    <input type='text' name='name' id='name'/>
                </td>
                <th scope="row"><label htmlFor="type">종류</label></th>
                <td>
                    <input type='text' name='type' id='type' style={{ width: '80%' }} />
                    <button onClick={diviceSearch} className='btn btn-black btn-search'>검색</button>
                </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className='approval-conts'>
            <div className="result-pageview mb15">
                <div>
                    <span className='total-view'>총 <b>109</b>개</span>
                    <span className='select-wrap'>
                    <select name="pageViewCnt">
                        <option value="20" selected="selected">20개씩 보기</option>
                        <option value="30">30개씩 보기</option>
                        <option value="50">50개씩 보기</option>
                        <option value="100">100개씩 보기</option>
                    </select>
                    </span>
                </div>
            </div>
            <table className="popup-table center">
                <caption>이름,종류,기종,주소,포트 상태,상태 영역</caption>
                <colgroup>
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '12%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '19%' }} />
                    <col style={{ width: '22%' }} />
                    <col style={{ width: '14%' }} />
                </colgroup>
                <thead>
                <tr>
                    <th>선택</th>
                    <th>이름</th>
                    <th>종류</th>
                    <th>기종</th>
                    <th>주소</th>
                    <th>포트 상태</th>
                    <th>상태</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="center">
                            <input type="checkbox" name={`divice${index}`} id={`divice_${index}`} checked={selectedItems.includes(index)} onChange={(e) => handleCheckboxChange(e, index)} />
                            <label htmlFor={`divice_${index}`} style={{ margin: '0' }}></label>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.model}</td>
                        <td>{item.address}</td>
                        <td>{item.portStatus}</td>
                        <td>{item.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <div className='right'>
            <button className='btn btn-primary ml10' onClick={handleConfirmClick}>장비 설정</button>
        </div>
    </>
  );
};

export default SelectDivece;

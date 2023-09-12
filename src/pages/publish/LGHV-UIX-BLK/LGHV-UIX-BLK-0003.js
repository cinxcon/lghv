import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle';
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';

import Select from 'react-select';

const CellList = () => {
  const pagedata = {
    title: '장애관리',
    subtitle: '셀목록',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  const data = [
    { infra: '강원인프라팀', so: '영서방송', cell: 'DG1', address: '태백~도계 국간망', dtn: 83, net: 29, voip: 8, atv: 12, total: 132 },
    { infra: '강원인프라팀', so: '영서방송', cell: 'DG1', address: '태백~도계 국간망', dtn: 83, net: 29, voip: 8, atv: 12, total: 132 },
    { infra: '강원인프라팀', so: '영서방송', cell: 'DG1', address: '태백~도계 국간망', dtn: 83, net: 29, voip: 8, atv: 12, total: 132 },
    { infra: '강원인프라팀', so: '영서방송', cell: 'DG1', address: '태백~도계 국간망', dtn: 83, net: 29, voip: 8, atv: 12, total: 132 }
  ];

  const handleConfirmClick = () => {
  // 템플릿 선택
  }

  // 셀렏트 리스트
  const optionsIfraType = [
    { value: 'all', label: '전체' },
    { value: '서울인프라팀', label: '서울인프라팀' },
    { value: '경북인프라팀', label: '경북인프라팀' }
  ];

  const optionsSoType = [
    { value: 'all', label: '전체' },
    { value: 'so', label: 'SO' }
  ];

  const [infraType, setInfraType] = useState(optionsIfraType[0]);
  const [soType, setSoType] = useState(optionsSoType[0]);

  return (
    <>
        <ContentTitle data={pagedata} />
        <div className='content-section'>
            <div className='search-wrap sl'>
                <table className='search'>
                    <caption>템플릿 검색 영역</caption>
                    <colgroup>
                        <col style={{ width: '5%' }} />
                        <col style={{ width: '24%' }} />
                        <col style={{ width: '5%' }} />
                        <col style={{ width: '24%' }} />
                        <col style={{ width: '5%' }} />
                        <col style={{ width: '24%' }} />
                        <col style={{ width: '12%' }} />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row"><label htmlFor="infra">인프라팀</label></th>
                            <td>
                                <Select defaultValue={optionsIfraType[0]} value={infraType} onChange={setInfraType} options={optionsIfraType} className='react-select-container' classNamePrefix="react-select" />
                            </td>
                            <th scope="row"><label htmlFor="SO ">SO </label></th>
                            <td>
                                <Select defaultValue={optionsSoType[0]} value={soType} onChange={setSoType} options={optionsSoType} className='react-select-container' classNamePrefix="react-select" />
                            </td>
                            <th scope="row"><label htmlFor="cell ">CELL</label></th>
                            <td>
                                <input type="text" placeholder="값을 선택하세요." className='input' />
                            </td>
                            <td className='right'>
                                <button className='btn btn-low btn-ref'>초기화</button>
                                <button className='btn btn-black btn-search-txt ml10'>검색</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="result-pageview mb15">
            <ResultPageView />
            <div className='btn-wrap'>
               <button type="button" className='btn btn-md btn-exel'>엑셀</button>
            </div>
        </div>
        <table className="table center">
            <caption>제목, 등록번호, 등록자, 등록부서, 등록일, 종료일, 구역명, 완료예정일, 구분 항목의 검색 영역</caption>
            <colgroup>
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '40%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '10%' }} />
            </colgroup>
            <thead>
            <tr>
                <th rowSpan={2}>인프라팀</th>
                <th rowSpan={2}>SO</th>
                <th rowSpan={2}>CELL</th>
                <th rowSpan={2}>주소</th>
                <th colSpan={4}>가입자 모수</th>
                <th rowSpan={2}>합</th>
            </tr>
            <tr>
                <th>DTN</th>
                <th>NET</th>
                <th>VOIP</th>
                <th>ATV</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
            <tr key={row.id} onClick={handleConfirmClick} className='link'>
                <td>{row.infra}</td>
                <td>{row.so}</td>
                <td>{row.cell}</td>
                <td>{row.address}</td>
                <td>{row.dtn}</td>
                <td>{row.net}</td>
                <td>{row.voip}</td>
                <td>{row.atv}</td>
                <td>{row.total}</td>
            </tr>))}
            </tbody>
        </table>
        <ResultNoData />
        <ResultListPaging />
     </>
  );
};

export default CellList;

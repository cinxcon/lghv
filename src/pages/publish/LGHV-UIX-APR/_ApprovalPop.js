/* eslint-disable */
import ApprovalPopList from './component/_ApprovalPopList';

function ApprovalPop() {
  return (
    <>
      <div className="content-title">
        <h2>팝업 테스트 목록</h2>
      </div>
      <ApprovalPopList toDetail="/LGHV-UIX-APR/ApprovalPopDetail" currentStatus="테스트" />
    </>
  )
}

export default ApprovalPop;

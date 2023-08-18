function PopupNotiMethod() {
  return (
    <>
    <div className="flex-wrap">
        <label htmlFor="line">결제선명 : </label>
        <input type="text" name="line" id="line" className="ml15" style={{ width: '80%' }}></input>
    </div>
    <div className="btn-group center">
        <button type="button" className="btn">취소</button>
        <button type="button" className="btn btn-primary">저장</button>
    </div>
    </>
  )
}

export default PopupNotiMethod;

import React, { useState, useEffect, useRef } from 'react';
import { Notice } from '../popup/Popup';

const Footer = () => {
  const noticeElementRef = useRef(null);
  const [notice, setNotice] = useState([false, false, false]);

  useEffect(() => {
    // setNotice([true, true, true]);
    setNotice([false, false, false]);
  }, []);
  const closeNotice = (index) => {
    const newNoticeStates = [...notice];
    newNoticeStates[index] = !newNoticeStates[index];
    setNotice(newNoticeStates);
  }
  const trueCount = notice.filter(value => value === true).length;
  if (noticeElementRef.current) {
    if (trueCount === 0) {
      noticeElementRef.current.classList.add('close');
    }
  }
  return (
    <>
      <div className="new_footer">
        <footer id="footer">
          <div className="address-area">
            <address>
              <div className="address-info">
                <p>
                  <span>대표이사 : 송구영</span>
                  <span>
                    서울특별시 마포구 월드컵북로 56길 19 상암디지털드림타워
                  </span>
                  <span>사업자등록번호 : 117-81-13423</span>
                  <span className="last-line">
                    통신판매업 신고번호 : 2017-서울마포-0254
                  </span>
                </p>
                <p>
                  <span>개인정보보호책임자 : 이건호</span>
                  <span>
                    배송/개통문의 : 1855-1055(유심/단말) 1855-1061(셀프개통)
                    1855-1062(중고폰AS)
                  </span>
                  <span className="last-line">
                    고객센터 : 1855-1140(LGU+망) 1855-1144(KT망) 1855-2114(SK망)
                  </span>
                </p>
                <p>Copyright © 2020 LG HelloVision All rights reserved.</p>
              </div>
            </address>
          </div>
        </footer>
      </div>
      <div className="notice-pop" ref={noticeElementRef}>
        <Notice open={notice[0]} header="[공지1] 23년 디지털 채널 개편 일정" close={() => closeNotice(0)} id={'T111111111'} >
          [공지1] 23년 디지털 채널 개편 일정에 대하여 안내 드립니다.<br />
          개편일정<br />
          2023년 9월 5일 ~ 2023년 10월 5일<br />
          작업 내용 확인하시고 개별 통보 부탁드립니다.<br />
          감사합니다.
        </Notice>
        <Notice open={notice[1]} header="[공지2] 23년 디지털 채널 개편 일정" close={() => closeNotice(1)} id={'T111111112'} >
          [공지2] 23년 디지털 채널 개편 일정에 대하여 안내 드립니다.<br />
          개편일정<br />
          2023년 9월 5일 ~ 2023년 10월 5일<br />
          작업 내용 확인하시고 개별 통보 부탁드립니다.<br />
          감사합니다.
        </Notice>
        <Notice open={notice[2]} header="[공지3] 23년 디지털 채널 개편 일정" close={() => closeNotice(2)} id={'T111111113'} >
          [공지3] 23년 디지털 채널 개편 일정에 대하여 안내 드립니다.<br />
          개편일정<br />
          2023년 9월 5일 ~ 2023년 10월 5일<br />
          작업 내용 확인하시고 개별 통보 부탁드립니다.<br />
          감사합니다.
        </Notice>
        </div>
    </>
  );
};

export default Footer;

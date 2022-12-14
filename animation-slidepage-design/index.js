//시작 후 로딩이 완료되는 5초 뒤에 클릭 이벤트 추가
document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(() => {
        const btnPage1Next = document.getElementById("btn-page1-next");
        btnPage1Next.onclick = (e) => {
            movePage(2);
        };

		const transTitle = document.getElementById("trans-title");
        transTitle.onclick = (e) => {
            movePage(1);
        };
    }, 5000);
});

/*
 * 페이지 이동(좌우)
 * page : 몇 페이지로 이동할 것인지 알려주는 숫자
 */
const movePage = (page) => {
    document.getElementById("page-standard").className = "moveToPage" + page;
};

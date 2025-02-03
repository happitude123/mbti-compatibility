function checkCompatibility() {
    const myMbti = document.getElementById('myMbti').value;
    const partnerMbti = document.getElementById('partnerMbti').value;
    const resultDiv = document.getElementById('result');

    if (!myMbti || !partnerMbti) {
        showResult({
            score: 0,
            message: "두 MBTI 유형을 모두 선택해주세요!",
            color: "#ffecee",
            textColor: "#ff6b6b"
        });
        return;
    }

    const compatibility = calculateCompatibility(myMbti, partnerMbti);
    const result = getResultMessage(compatibility);
    showResult(result);
}

function calculateCompatibility(mbti1, mbti2) {
    let score = 0;
    
    // 성격 유형 비교
    if (mbti1[0] !== mbti2[0]) score += 25; // E/I
    if (mbti1[1] === mbti2[1]) score += 25; // N/S
    if (mbti1[2] === mbti2[2]) score += 25; // T/F
    if (mbti1[3] === mbti2[3]) score += 25; // J/P

    return score;
}

function getResultMessage(score) {
    if (score >= 75) {
        return {
            score: score,
            message: "운명적인 만남이에요! 🌟\n최고의 궁합입니다!",
            color: "#e8f5e9",
            textColor: "#2e7d32"
        };
    } else if (score >= 50) {
        return {
            score: score,
            message: "꽤 좋은 케미가 기대되는 궁합이에요! ✨",
            color: "#fff3e0",
            textColor: "#f57c00"
        };
    } else if (score >= 25) {
        return {
            score: score,
            message: "서로를 이해하려 노력한다면\n충분히 좋은 관계가 될 수 있어요! 💪",
            color: "#e3f2fd",
            textColor: "#1976d2"
        };
    } else {
        return {
            score: score,
            message: "차이를 인정하고 존중하는 게 중요해요.\n새로운 시각을 배울 수 있는 기회! 🌱",
            color: "#ffebee",
            textColor: "#c62828"
        };
    }
}

function showResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <div style="font-size: 2em; margin-bottom: 10px;">
            ${result.score}점
        </div>
        <div style="white-space: pre-line">
            ${result.message}
        </div>
    `;
    resultDiv.style.backgroundColor = result.color;
    resultDiv.style.color = result.textColor;
    
    // 애니메이션 효과
    resultDiv.classList.remove('show');
    void resultDiv.offsetWidth; // 리플로우 강제 실행
    resultDiv.classList.add('show');
}

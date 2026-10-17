// ربط العناصر
const passwordInput = document.getElementById("myPassword");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

// الباسورد الصحيح (تقدر تغيره براحتك)
const correctPass = "7/7/2008";

// دالة التحقق
function handleLogin() {
    let enteredValue = passwordInput.value;

    if (enteredValue === "") {
        message.style.color = "#fbbf24";
        message.innerText = "من فضلك اكتب الباسورد الأول! ⚠️";
        return;
    }

    if (enteredValue === correctPass) {
        message.style.color = "#34d399";
        message.innerText = "تم التحقق بنجاح، جاري نقلك لعالم الأساطير... 🚀";
        
        // الانتقال لصفحة الترحيب بعد نصف ثانية عشان تحس بالأنيميشن
        setTimeout(function() {
            window.location.href = "index2.html";
        }, 800);
        
    } else {
        message.style.color = "#f87171";
        message.innerText = "كلمة المرور خاطئة، حاول مجدداً ❌";
        
        // اهتزاز خفيف للخنة لو الباسورد غلط (لإضافة لمسة احترافية)
        passwordInput.style.transform = "translateX(10px)";
        setTimeout(() => { passwordInput.style.transform = "translateX(0)"; }, 100);
    }
}

// التفعيل عند الضغط على الزرار
loginBtn.addEventListener("click", handleLogin);

// التفعيل أيضاً لو ضغط المستخدم Enter وهو جوه الخانة
passwordInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleLogin();
    }
});
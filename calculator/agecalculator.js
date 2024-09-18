function calculateAge() {
    const presentDate = new Date(document.getElementById('present-date').value);
    const birthDate = new Date(document.getElementById('birth-date').value);

    if (!presentDate || !birthDate) {
        document.getElementById('result').innerHTML = "Please select both dates!";
        return;
    }

    let age = presentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = presentDate.getMonth() - birthDate.getMonth();
    const dayDiff = presentDate.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').innerHTML = `Your age is ${age} years.`;
}

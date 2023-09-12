const form = document.getElementById("myform");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const pnum = document.getElementById("pnum");
const dob = document.getElementById("dob");
const Address1 = document.getElementById("Address1");
const Address2 = document.getElementById("Address2");
const gender = document.getElementById("gender");
const nation = document.getElementById("nation");
const district = document.getElementById("district");
const state = document.getElementById("state");
const country = document.getElementById("country");
const zcode = document.getElementById("zcode");

email.addEventListener("input", (e) => {
    if (!email.value.includes("@")) {
        email.classList.add("error");
    } else {
        email.classList.remove("error");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Running.....");

    const data = {
        FirstName: fname.value,
        LastName: lname.value,
        Email: email.value,
        PhoneNumber: pnum.value,
        DateOfBirth: dob.value,
        Address1: Address1.value,
        Address2: Address2.value,
        Gender: gender.value,
        Nationality: nation.value,
        District: district.value,
        State: state.value,
        Country: country.value,
        ZipCode: zcode.value
    };

    if (fname.value !== "" && lname.value !== "") {
        if (email.value !== "" && pnum.value !== "") {
            if (nation.value !== "" && district.value !== "") {
                if (state.value !== "" && country.value !== "") {
                    postData(data);
                }
            }
        }
    }
});

async function postData(data) {
    console.log(data);
    await axios
        .post("http://13.48.127.101:3000/postdata", data)
        .then((res) => console.log(res.data));
}

async function getData() {
    const values = document.getElementById("register-value");
    let result = await axios
        .get("http://13.48.127.101:3000/getdata")
        .then((res) => res.data);

    console.log(result);


    result.forEach((val) => {
        values.innerHTML += `
          <div>
              <h3>PersonID: ${val.PersonID}</h3>
              <h3>FirstName: ${val.FirstName}</h3>
              <h3>LastName: ${val.LastName}</h3>
              <h3>PhoneNumber: ${val.PhoneNumber}</h3>
              <h3>DateOfBirth: ${val.DateOfBirth}</h3>
              <h3>Address1: ${val.Address1}</h3>
              <h3>Address2: ${val.Address2}</h3>
              <h3>Gender: ${val.Gender}</h3>
              <h3>Nationality: ${val.Nationality}</h3>
              <h3>District: ${val.District}</h3>
              <h3>State: ${val.State}</h3>
              <h3>Country: ${val.Country}</h3>
              <h3>ZipCode: ${val.ZipCode}</h3>
          </div>`;
    });

}
getData();



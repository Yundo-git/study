// window.Kakao.init('fcd58ac4d50b44f0bc9994cdf186e066');   
// console.log( '초기화 잘됨?',Kakao.isInitialized() );


let userNickname = '';
let userProfile = '';

if (window.Kakao) {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('fcd58ac4d50b44f0bc9994cdf186e066');
    }
  }
function loginWithKakao(){
    window.Kakao.Auth.login({
        scope : 'profile_nickname, talk_message	, profile_image',
        // redirectUri: 'http://localhost:5500/html/login.html',
        success : function(authObj){
            console.log(authObj);
            window.Kakao.API.request({
                url: '/v2/user/me',
                success : res =>{
                    const kakao_account = res.kakao_account;
                    console.log(kakao_account);
                    // console.log(profile.nickname);
                    // window.location.href="./mypage.html"

                    
                    // Cookies.set("user", JSON.stringify(kakao_account.profile.nickname))
                    userNickname = kakao_account.profile.nickname;
                    userProfile = kakao_account.profile.profile_image_url;
                    console.log(userNickname);               
                    console.log(userProfile);
                    document.querySelector('#token-result').innerText = 'login success, ready to request API';
                    // return document.cookie = userNickname;

                }
            })
        }
    })
};

module.exports = {
    userNickname
  };


// export let name = userNickname;
// function loginWithKakao() {
//     Kakao.Auth.authorize({
//     //   redirectUri: 'https://developers.kakao.com/tool/demo/oauth',
//     redirectUri: 'http://localhost:5500/html/login.html',
//     scope: 'account_email,gender',
//     state: 'userme',

//     });

//   }
 
// //   $.ajax({
// //     type : "POST"
// //     , url : 'https://kauth.kakao.com/oauth/token'
// //     , data : {
// //         grant_type : 'authorization_code',
// //         client_id : 'fcd58ac4d50b44f0bc9994cdf186e066',
// //         redirect_uri : 'http://localhost:5500/html/login.html',
// //         code : kakaoCode
// //     }
// //     , contentType:'application/x-www-form-urlencoded;charset=utf-8'
// //     , dataType: null
// //     , success : function(response) {
// //         Kakao.Auth.setAccessToken(response.access_token);
// //         document.querySelector('button.api-btn').style.visibility = 'visible';
// //     }
// //     ,error : function(jqXHR, error) {

// //     }
// // });
//   function requestUserInfo() {
//     Kakao.API.request({
//       url: '/v2/user/me',
//     })
//       .then(function(res) {
//         console.log(JSON.stringify(res));
//       })
//       .catch(function(err) {
//         alert(
//           'failed to request user information: ' + JSON.stringify(err)
//         );
//       });
//   }

//   requestUserInfo();
//   // 아래는 데모를 위한 UI 코드입니다.
//   function displayToken() {
//     var token = getCookie('authorize-access-token');

//     if(token) {
//       Kakao.Auth.setAccessToken(token);
//       Kakao.Auth.getStatusInfo()
//         .then(function(res) {
//           if (res.status === 'connected') {
//             document.getElementById('token-result').innerText
//               = 'login success, token: ' + Kakao.Auth.getAccessToken();
//             document.querySelector('#token-result').innerText = 'login success, ready to request API';
//             console.log('login success')
//             document.querySelector('button.api-btn').style.visibility = 'visible';
//           }
//         })
//         .catch(function(err) {
//           Kakao.Auth.setAccessToken(null);
//           console.log('not login');
//         });
//     }
//   }
//   displayToken();

//   function getCookie(name) {
//     var parts = document.cookie.split(name + '=');
//     if (parts.length === 2) { return parts[1].split(';')[0]; }
//   }


// //   Kakao.Auth.logout()
// //   .then(function(response) {
// //     console.log(Kakao.Auth.getAccessToken()); // null
// //     console.log(response);
// //   })
// //   .catch(function(error) {
// //     console.log('Not logged in.',error);
// //   });


// //   Kakao.API.request({
// //     url: '/v2/user/me',
// //   })
// //     .then(function(response) {
// //       console.log(response);
// //     })
// //     .catch(function(error) {
// //       console.log(error);
// //     });
var _web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));

var contract_address='0xc380972894bf071902426e3d96e8908f3496ef94';
const abi_json= [
	{
		"constant": false,
		"inputs": [
			{
				"name": "data_identifier",
				"type": "string"
			},
			{
				"name": "holding_number",
				"type": "uint256"
			},
			{
				"name": "tenant_name",
				"type": "string"
			},
			{
				"name": "Address",
				"type": "string"
			},
			{
				"name": "nature_of_right",
				"type": "string"
			},
			{
				"name": "survey_plot_no",
				"type": "uint256"
			},
			{
				"name": "area_in_hectare",
				"type": "uint256"
			},
			{
				"name": "land_revenue",
				"type": "uint256"
			},
			{
				"name": "nature_of_use",
				"type": "string"
			}
		],
		"name": "createRecord",
		"outputs": [
			{
				"name": "iscreated",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "user_address",
				"type": "address"
			},
			{
				"name": "record_number",
				"type": "uint256"
			}
		],
		"name": "signing",
		"outputs": [
			{
				"name": "isSigned",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "record_number",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "data_identifier",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "holding_number",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tenant_name",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "Address",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "nature_of_right",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "survey_plot_no",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "area_in_hectare",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "land_revenue",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "nature_of_use",
				"type": "string"
			}
		],
		"name": "recordCreation",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "user_address",
				"type": "address"
			},
			{
				"name": "record_number",
				"type": "uint256"
			}
		],
		"name": "isUserSigned",
		"outputs": [
			{
				"name": "isSigned",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "user_address",
				"type": "address"
			}
		],
		"name": "noOfUserRecords",
		"outputs": [
			{
				"name": "noOfRecords",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "user_address",
				"type": "address"
			},
			{
				"name": "record_number",
				"type": "uint256"
			}
		],
		"name": "showRecordByKeys1",
		"outputs": [
			{
				"name": "data_identifier",
				"type": "string"
			},
			{
				"name": "holding_number",
				"type": "uint256"
			},
			{
				"name": "tenant_name",
				"type": "string"
			},
			{
				"name": "Address",
				"type": "string"
			},
			{
				"name": "nature_of_right",
				"type": "string"
			},
			{
				"name": "survey_plot_no",
				"type": "uint256"
			},
			{
				"name": "area_in_hectare",
				"type": "uint256"
			},
			{
				"name": "land_revenue",
				"type": "uint256"
			},
			{
				"name": "nature_of_use",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "showUserAddresses",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
let landrecord = new _web3.eth.Contract(abi_json,contract_address,{gaslimit:3000000});

//         if(err) return false;
var status='' ;
function login(state)
{
   status=parseInt(state);
    var key = document.getElementById('privatekey').value;
    if(key.length == 64 || key.length == 66)
    {
        if(key.length == 64)
        {
            var Acc_address = _web3.eth.accounts.privateKeyToAccount('0x'+key);
        }
        else
        {
            var Acc_address = _web3.eth.accounts.privateKeyToAccount(key);
        }
        console.log("Login success")
        localStorage.setItem('privatekey', Acc_address.privateKey)
        localStorage.setItem('publickey', Acc_address.address)
        document.getElementById('privatekey').value = "";
        if(state==1){ 
        window.location.href = "pages/publisher/plr.html";
        }
        
        if(state==2){
        window.location.href = "pages/customer/plr.html"
        }
        
    }
    else
        alert("Invalid Private Key")
}

function logout()
{
    localStorage.clear()
    window.location.href="../../index.html"
}

function store_data(){
    document.getElementById('loader').style.display = "block";
    $('#data_identifier').val()
    var identifier=$('#data_identifier').val();
    var holding_number = $('#holding_number').val();
    var tenant_name = $('#tenant_name').val();
    var Address = $('#Address').val();
    var nature_of_right = $('#nature_of_right').val();
    var survey_plot_no = $('#survey_plot_no').val();
    var area_in_hectare = $('#area_in_hectare').val();
    var land_revenue = $('#land_revenue').val();
    var nature_of_use = $('#nature_of_use').val();


    let _privatekey=localStorage.getItem('privatekey');
    console.log(_privatekey);
    let user_address=localStorage.getItem('publickey');
    console.log(user_address);
    
    _web3.eth.getTransactionCount(user_address,function(err,result){
        console.log(result)
        var nonce = result.toString(16);

    const tx = {
        to: contract_address,
        gas: 850000,
        data:landrecord.methods.createRecord(identifier,parseInt(holding_number),tenant_name,Address,nature_of_right,parseInt(survey_plot_no),parseInt(area_in_hectare),parseInt(land_revenue),nature_of_use).encodeABI(),
    };

        _web3.eth.accounts.signTransaction(tx, _privatekey,function(err,res){
console.log(res);

        _web3.eth.sendSignedTransaction( res.rawTransaction).on('transactionHash', txHash => {
            console.log("txHash", txHash); tx1=txHash }
        ).on('receipt',
            receipt => {
                 console.log("receipt", receipt)
          if(receipt["status"]== "0x1"){
            // document.getElementById('ld').style.display = 'none';
            console.log("success");
        document.getElementById('data_identifier_show').innerText=identifier;
        document.getElementById('address').innerText=user_address;
        document.getElementById('transaction_id').innerText=receipt.logs[0].id;
        document.getElementById('transaction_url').innerText="https://ropsten.etherscan.io/tx/"+receipt['transactionHash'];
        document.getElementById('loader').style.display = "none";

        $('#exampleModal').modal('show');


          }
        })
    

})

})
}


function Pay() {
    document.getElementById('loader').style.display = "block";

    let amount = $('#user_amount').val();
    let user_account = $('#user_account').val();

    let _privatekey=localStorage.getItem('privatekey');
    console.log(_privatekey);
    let user_address=localStorage.getItem('publickey');
    console.log(user_address);
    
    _web3.eth.getTransactionCount(user_address,function(err,result){
        console.log(result)
        var nonce = result.toString(16);

        const tx = {
            to: user_account,
            gas: 850000,
            value : _web3.utils.toWei(amount),
            data: _web3.utils.fromAscii("PayTenant")
        };

        _web3.eth.accounts.signTransaction(tx, _privatekey,function(err,res){
            _web3.eth.sendSignedTransaction( res.rawTransaction).on('transactionHash', txHash => {
                console.log("txHash", txHash); tx1=txHash }
            ).on('receipt',
                receipt => {
                    document.getElementById('loader').style.display = "none";
                     console.log("receipt", receipt)
                     payment_History()
              if(receipt["status"]== "0x1"){
                console.log("success"); 
              }
            });
        });

    });

}


function payment_History() {
    let user_address=localStorage.getItem('publickey');
    $("#pay_body").html('')
    $.get("http://api-ropsten.etherscan.io/api?module=account&action=txlist&address="+user_address+"&startblock=0&endblock=99999999&sort=dsc").then(res =>{
        res.result.forEach(function(index,data){
            if (index.input == "0x50617954656e616e74") {
                $("#pay_body").append('<tr><td>'+new Date(index.timeStamp*1000).toString()+'</td><td>'+index.value/1000000000000000000+'</td><td><a href="https://ropsten.etherscan.io/tx/'+index.hash+'" class="btn btn-primary btn-sm" data-dismiss="modal">Track</a></td></tr>')
            }
            
        })
    })
}

function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};


function get_Signature_to_done () {
    console.log(landrecord);
    let creators = []
    $('#not-signed, #signed').html('')
    
    landrecord.methods.showUserAddresses().call().then(res => {
        res.forEach(function(data,index){
            if(creators.indexOf(data) == -1) {
                creators.push(data)
                landrecord.methods.noOfUserRecords(data).call().then(num =>{
                    range(1,parseInt(num)+1).forEach(function(recordno,i){
                        landrecord.methods.showRecordByKeys1(data,recordno).call().then(dataset1 => {
                            landrecord.methods.isUserSigned(data,recordno).call().then(dataset2 => {
                                if( !dataset2 ) {
                                    $('#not-signed').append('\
                                    <tr><td>'+dataset1.holding_number+'</td>\
                                    <td>'+dataset1.tenant_name+'</td>\
                                    <td>'+dataset1.Address+'</td>\
                                    <td>'+dataset1.nature_of_right+'</td>\
                                    <td>'+dataset1.survey_plot_no+'</td>\
                                    <td>'+dataset1.area_in_hectare+'</td>\
                                    <td>'+dataset1.land_revenue+'</td>\
                                    <td>'+dataset1.nature_of_use+'</td>\
                                    <td><a href="#" onclick=sign("'+data+'",'+recordno+'); class="btn btn-primary btn-sm" data-dismiss="modal">Sign</a></td></tr>')
                                    // console.log(dataset1);
                                } else {
                                    $('#signed').append('\
                                    <tr><td>'+dataset1.holding_number+'</td>\
                                    <td>'+dataset1.tenant_name+'</td>\
                                    <td>'+dataset1.Address+'</td>\
                                    <td>'+dataset1.nature_of_right+'</td>\
                                    <td>'+dataset1.survey_plot_no+'</td>\
                                    <td>'+dataset1.area_in_hectare+'</td>\
                                    <td>'+dataset1.land_revenue+'</td>\
                                    <td>'+dataset1.nature_of_use+'</td>\
                                    <td><a href="#" class="btn btn-primary btn-sm" data-dismiss="modal">Signed</a></td></tr>')
                                }
                            })
                        })
                    })
                })                
            }
            
        })
    })
}

function sign(address,id) {
    document.getElementById('loader').style.display = "block";
    let _privatekey=localStorage.getItem('privatekey');
    console.log(_privatekey);
    let user_address=localStorage.getItem('publickey');
    console.log(user_address);
    
    _web3.eth.getTransactionCount(user_address,function(err,result){
        console.log(result)
        var nonce = result.toString(16);

    const tx = {
        to: contract_address,
        gas: 850000,
        data:landrecord.methods.signing(address,parseInt(id)).encodeABI(),
    };

        _web3.eth.accounts.signTransaction(tx, _privatekey,function(err,res){
        console.log(res);

        _web3.eth.sendSignedTransaction( res.rawTransaction).on('transactionHash', txHash => {
            console.log("txHash", txHash); tx1=txHash }
        ).on('receipt',
            receipt => {
                 console.log("receipt", receipt)
          if(receipt["status"]== "0x1"){
            // document.getElementById('ld').style.display = 'none';
            console.log("success");

        document.getElementById('loader').style.display = "none";
        get_Signature_to_done()

          }
        })
    })
    })
}

payment_History()
get_Signature_to_done ()


var _web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
var contract_address='0x0b67E32fB4e3d0A48f2D81978929b3aDac0d4F61';
const abi_json=[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_new_role",
				"type": "uint256"
			},
			{
				"name": "_seaFoodId",
				"type": "uint256"
			}
		],
		"name": "seaFoodOwnershipTransfer",
		"outputs": [
			{
				"name": "isTransfered",
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
				"name": "tracking_id",
				"type": "string"
			},
			{
				"name": "fish_name",
				"type": "string"
			},
			{
				"name": "company_name",
				"type": "string"
			},
			{
				"name": "iot_tracking_device_number",
				"type": "string"
			}
		],
		"name": "fishermanAddSeaFood",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "seaFoodIds",
		"outputs": [
			{
				"name": "",
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
				"name": "_seaFoodId",
				"type": "uint256"
			}
		],
		"name": "seaFoodDetailBySeaFoodId",
		"outputs": [
			{
				"name": "tracking_id",
				"type": "string"
			},
			{
				"name": "fish_name",
				"type": "string"
			},
			{
				"name": "company_name",
				"type": "string"
			},
			{
				"name": "iot_tracking_device_number",
				"type": "string"
			},
			{
				"name": "current_owner_address",
				"type": "address"
			},
			{
				"name": "role",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "sea_food_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tracking_id",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "fish_name",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "company_name",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "iot_tracking_device_number",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "fisherman_address",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "added_time",
				"type": "uint256"
			}
		],
		"name": "fishermanAddingSeaFood",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "sea_food_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "previous_owner",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "new_owner",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "transferred_time",
				"type": "uint256"
			}
		],
		"name": "fishermanToHatcheryTransfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "sea_food_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "previous_owner",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "new_owner",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "transferred_time",
				"type": "uint256"
			}
		],
		"name": "HatcheryToDistributorTransfer",
		"type": "event"
	}
];
let seafood = new _web3.eth.Contract(abi_json,contract_address);
console.log(_web3.version);
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
        document.getElementById('privatekey').value = "";
        if(state==1){ 
        window.location.href = "pages/uaedashboard.html";
        }
        
        if(state==2){
        window.location.href = "pages/customer/profileb.html"
        }
        if(state==3){
        window.location.href = "pages/customer/hatchery.html"
        }
        if(state==4){
        window.location.href = "pages/customer/distributor.html"
        }
    }
    else
        alert("Invalid Private Key")
}



// function add_new(){
//         var fish_name = String(document.getElementById('validationCustom01').value);
//         var fish_company_name = String(document.getElementById('validationCustom02').value);
//         var tracking_id = String(document.getElementById('validationCustom03').value);
//         var iot_device_id = String(document.getElementById('validationCustom04').value);
//         var terms_condition = document.getElementById('invalidCheck').checked;

//         console.log(typeof(fish_name) +'  '+typeof(fish_company_name)+'  '+typeof(tracking_id)+'  '+typeof(iot_device_id)+'  '+terms_condition);
        
//         if(fish_name && fish_company_name && tracking_id && iot_device_id && terms_condition)
//         {
//             // myContract.methods.trackstatus(tracking_id).call((err,res) => {
//                 // if(!res)
//                 // {
//                     document.getElementById('loader').style.display = "block";

//                     console.log(tracking_id,fish_name, fish_company_name,iot_device_id);
                 
//                     const tx = {
//                         to: contract_address,
//                         gas: 5500000,
//                         data: seafood.methods.fisermanAddSeaFood(tracking_id,fish_name, fish_company_name,iot_device_id).encodeABI(),
//                     };

//                     let _privatekey=localStorage.getItem('privatekey');
//                     console.log(_privatekey);
//                         _web3.eth.accounts.signTransaction(tx, _privatekey,function(err,res){
//                              console.log(res);
                
//                         _web3.eth.sendSignedTransaction( res.rawTransaction).on('transactionHash', txHash => {
//                             console.log("txHash", txHash); tx1=txHash }
//                         ).on('receipt',
//                             receipt => {
//                                  console.log("receipt", receipt)
//                           if(receipt["status"]== "0x1"){

//                              console.log("Transaction Success", tx.data);
//                                 document.getElementById('validationCustom01').value = "";
//                                 document.getElementById('validationCustom02').value = "";
//                                 document.getElementById('validationCustom03').value = "";
//                                 document.getElementById('validationCustom04').value = "";
//                                 document.getElementById('invalidCheck').checked = false;
//                                 document.getElementById('loader').style.display = "none";
//                                 // window.location.href = "uaedashboard.html"
//                                 window.location.reload()
//                           }
//                           else
//                           {
//                               console.log("Transaction Failed");
//                               document.getElementById('loader').style.display = "none";
//                           }
//                         }).catch(err =>{
//                             console.error(err);
//                             document.getElementById('loader').style.display = "none";
//                         });

//                     })
//             }
//         // {
//         //     document.getElementById('track').innerHTML = "Please provide a valid ID"
//         // }

  
// }




function add_new(){
console.log('Changed');
document.getElementById('loader').style.display = "block";

    var fish_name = String(document.getElementById('validationCustom01').value);
    var fish_company_name = String(document.getElementById('validationCustom02').value);
    var tracking_id = String(document.getElementById('validationCustom03').value);
    var iot_device_id = String(document.getElementById('validationCustom04').value);
    var terms_condition = document.getElementById('invalidCheck').checked;
    
            console.log(typeof(fish_name) +'  '+typeof(fish_company_name)+'  '+typeof(tracking_id)+'  '+typeof(iot_device_id)+'  '+terms_condition);
            
            // if(fish_name && fish_company_name && tracking_id && iot_device_id && terms_condition)
            // {

    var tx = {
        to: '0x0b67E32fB4e3d0A48f2D81978929b3aDac0d4F61',
        gas: 850000,
        data:seafood.methods.fishermanAddSeaFood(tracking_id,fish_name, fish_company_name,iot_device_id).encodeABI(),
    };

    let _privatekey=localStorage.getItem('privatekey');
    console.log(_privatekey);
        _web3.eth.accounts.signTransaction(tx,_privatekey,function(err,res){
console.log(res);

        _web3.eth.sendSignedTransaction( res.rawTransaction).on('transactionHash', txHash => {
            console.log("txHash", txHash); tx1=txHash }
        ).on('receipt',
            receipt => {
            
                console.log("receipt", receipt)
                if(receipt["status"]== "0x1"){

                   console.log("Transaction Success", tx.data);
                      document.getElementById('validationCustom01').value = "";
                      document.getElementById('validationCustom02').value = "";
                      document.getElementById('validationCustom03').value = "";
                      document.getElementById('validationCustom04').value = "";
                      document.getElementById('invalidCheck').checked = false;
                      document.getElementById('loader').style.display = "none";
                      // window.location.href = "uaedashboard.html"
                      window.location.reload()
                }
                else
                {
                    console.log("Transaction Failed");
                    document.getElementById('loader').style.display = "none";
                }
              }).catch(err =>{
                  console.error(err);
                  document.getElementById('loader').style.display = "none";
              });
    

})
}


function logout()
{
    localStorage.clear()
    window.location.href="../../index.html"
}

function getFishDetails()
    {
        // document.getElementById('loader').style.display = "block";
        seafood.methods.seaFoodIds().call((err,id) => {
            console.log('ID'+id);
            for(let i=1;i<=id;i++)
            {
            seafood.methods.seaFoodDetailBySeaFoodId(i).call((err,res) => {
                // console.log(res.role==1);
                var pkey=localStorage.getItem('privatekey')
                var obj=_web3.eth.accounts.privateKeyToAccount(pkey)
                console.log(obj.address+'     '+res.current_owner_address);
                
                if((res.role==1) && (res.current_owner_address!=obj.address)){
                    console.log(res);  
                    $("#tdata").append('<tr><td>'+res.tracking_id+'</td><td>'+res.fish_name+'</td><td>'+res.company_name+'</td><td>'+res.iot_tracking_device_number+'</td><td><button class="btn btn-primary btn-sm" type="submit" data-toggle="modal" onclick="purchase('+ 2 +',`'+ i +'`)" data-target="#exampleModal">Buy</button></td></tr>')
                }
                
                
            // if(err || res==0) {
            //     document.getElementById('loader').style.display = "none";
            //     return false;
            // }
            // // console.log('totaltracks ',res)
            // for(let i=0; i<res; i++)
            // {
            //     myContract.methods.nooftracks(i).call((err,res) => {
            //         if(err) return false;
            //         // console.log('nooftracks ',res)
            //         myContract.methods.FishDB(res).call((err,res) => {
            //             // console.log('FishDB ',res)
            //             var fishname =(res.FishName);
            //             var arg = res;
            //             $("#tdata").append('<tr><td>'+res.TrackingID+'</td><td>'+res.FishName+'</td><td>'+res.FishCompanyName+'</td><td>'+"In Transit"+'</td><td><button class="btn btn-primary btn-sm" type="submit" data-toggle="modal" onclick="tabledetails('+ res.TrackingID +',`'+ res.FishName +'`, `'+ res.FishCompanyName +'`)" data-target="#exampleModal">Track</button></td></tr>')
            //         })
            //     })
            // }
            // document.getElementById('loader').style.display = "none";
        })
    }
    })
    }
    getFishDetails()


    function purchase(role,id){
        document.getElementById('loader').style.display = "block";

        console.log(role,id);

        var tx = {
            to: '0x0b67E32fB4e3d0A48f2D81978929b3aDac0d4F61',
            gas: 850000,
            data:seafood.methods.seaFoodOwnershipTransfer(role,parseInt(id)).encodeABI(),
        };

        let _privatekey=localStorage.getItem('privatekey');
        console.log(_privatekey);
            _web3.eth.accounts.signTransaction(tx,_privatekey,function(err,res){
        console.log(res);

            _web3.eth.sendSignedTransaction( res.rawTransaction).on('transactionHash', txHash => {
                console.log("txHash", txHash); tx1=txHash }
            ).on('receipt',
                receipt => {
                
                    console.log("receipt", receipt)
                    if(receipt["status"]== "0x1"){
                        window.location.reload();
                    }
                    else
                    {
                        console.log("Transaction Failed");
                        document.getElementById('loader').style.display = "none";
                    }
                }).catch(err =>{
                    console.error(err);
                    document.getElementById('loader').style.display = "none";
                });


})  
}
 

    function getfishfromhatchery()
    {
        // document.getElementById('loader').style.display = "block";
     // document.getElementById('loader').style.display = "block";
        seafood.methods.seaFoodIds().call((err,id) => {
            console.log('ID'+id);
            for(let i=1;i<=id;i++)
            {
            seafood.methods.seaFoodDetailBySeaFoodId(i).call((err,res) => {
                // console.log(res.role==1);
                var pkey=localStorage.getItem('privatekey')
                var obj=_web3.eth.accounts.privateKeyToAccount(pkey)
                console.log(obj.address+'     '+res.current_owner_address);
                
                if((res.role==2) && (res.current_owner_address!=obj.address)){
                    console.log(res);  
                    $("#tabledata").append('<tr><td>'+res.tracking_id+'</td><td>'+res.fish_name+'</td><td>'+res.company_name+'</td><td>'+res.iot_tracking_device_number+'</td><td><button class="btn btn-primary btn-sm" type="submit" data-toggle="modal" onclick="purchase('+ 3 +',`'+ i +'`)" data-target="#exampleModal">Buy</button></td></tr>')
                }
                
                
            // if(err || res==0) {
            //     document.getElementById('loader').style.display = "none";
            //     return false;
            // }
            // // console.log('totaltracks ',res)
            // for(let i=0; i<res; i++)
            // {
            //     myContract.methods.nooftracks(i).call((err,res) => {
            //         if(err) return false;
            //         // console.log('nooftracks ',res)
            //         myContract.methods.FishDB(res).call((err,res) => {
            //             // console.log('FishDB ',res)
            //             var fishname =(res.FishName);
            //             var arg = res;
            //             $("#tdata").append('<tr><td>'+res.TrackingID+'</td><td>'+res.FishName+'</td><td>'+res.FishCompanyName+'</td><td>'+"In Transit"+'</td><td><button class="btn btn-primary btn-sm" type="submit" data-toggle="modal" onclick="tabledetails('+ res.TrackingID +',`'+ res.FishName +'`, `'+ res.FishCompanyName +'`)" data-target="#exampleModal">Track</button></td></tr>')
            //         })
            //     })
            // }
            // document.getElementById('loader').style.display = "none";
        })
    }
    })
            // document.getElementById('loader').style.display = "none";
    }
    getfishfromhatchery()



    function admintabledata(){
        
        seafood.getPastEvents('fishermanAddingSeaFood',   {fromBlock: 0,toBlock: 'latest'}, (error, bunch) => {
            bunch.forEach(index=> {
                console.log(index);
                // added_time: "1549016035"
                // company_name: "malto"
                // fish_name: "catfish"
                // fisherman_address: "0xCdd62B78b828464225E436CEd514d28647A04331"
                // iot_tracking_device_number: "11"
                // sea_food_id: "1"
                // tracking_id: "1"
                console.log(index.returnValues.added_time);  

        document.getElementById("fisher_time").innerText='';
        document.getElementById("hatchery_time").innerText='';
        document.getElementById("distributor_time").innerText='';

                document.getElementById("trackingid").innerText=index.returnValues.tracking_id;
                document.getElementById("fishname").innerText=index.returnValues.fish_name;
                document.getElementById("fcompanyname").innerText=index.returnValues.company_name;
                $("#admintabledata").append('<tr><td>'+index.returnValues.tracking_id+'</td><td>'+index.returnValues.fish_name+'</td><td>'+index.returnValues.company_name+'</td><td>'+index.returnValues.iot_tracking_device_number+'</td><td><button class="btn btn-primary btn-sm" type="submit" data-toggle="modal" onclick="get_hatchery_TimeDetails('+ index.returnValues.added_time +','+ index.returnValues.sea_food_id +')" data-target="#exampleModal">Track</button></td></tr>')
  
            });
            

            })
        // .then((events) => {
        //     console.log(events) // same results as the optional callback above
        // });
    }
admintabledata();


function get_hatchery_TimeDetails(fisherman_time,seafood_id){
    var hatchery_received_time='';
    seafood.getPastEvents('fishermanToHatcheryTransfer', {fromBlock: 0,toBlock: 'latest'}, (error, times) => {
        times.forEach(hatchery_time=>{
            console.log(hatchery_time);
               if(hatchery_time.returnValues.sea_food_id==seafood_id){
                hatchery_received_time=hatchery_time.returnValues.transferred_time;
                get_distributor_TimeDetails(seafood_id,fisherman_time,hatchery_received_time)
               }            
        })
    })
}
function get_distributor_TimeDetails(seafood_id,fisherman_time,hatchery_time){
    console.log(seafood_id,fisherman_time,hatchery_time);
    var distributor_received_time='';

    seafood.getPastEvents('HatcheryToDistributorTransfer',{fromBlock: 0, toBlock: 'latest'}, (error, dtimes) => {
        dtimes.forEach(distributor_time=>{
            if(distributor_time.returnValues.sea_food_id==seafood_id){

                distributor_received_time =distributor_time.returnValues.transferred_time;
            let time1=new Date(fisherman_time*1000)
            let time2=new Date(hatchery_time*1000)
            let time3=new Date(distributor_received_time*1000)
            console.log('Sea_Food_id',seafood_id);
            console.log('Fisher_Man_Time',time1);
            console.log('Hatchery_Man_Time',time2);
            console.log('Distributor_Man_Time',time3);
            // Time :05:45
            // 15 September, 2018


            document.getElementById("fisher_time").innerText=time1.getHours()+':'+time1.getMinutes();
            document.getElementById("hatchery_time").innerText=time2.getHours()+':'+time2.getMinutes();
            document.getElementById("distributor_time").innerText=time2.getHours()+':'+time3.getMinutes();
            if(time1.getMonth()==0)
            {
                document.getElementById("fisherman_date").innerText=time1.getDate()+'  '+'Janaury'+' '+time1.getFullYear();
            }
            if(time1.getMonth()==1)
            {
                document.getElementById("fisherman_date").innerText=time1.getDate()+'  '+'Febraury'+' '+time1.getFullYear();
            }
            if(time1.getMonth()==2)
            {
                document.getElementById("fisherman_date").innerText=time1.getDate()+'  '+'March'+' '+time1.getFullYear();
            }
            if(time1.getMonth()==3)
            {
                document.getElementById("fisherman_date").innerText=time1.getDate()+'  '+'April'+' '+time1.getFullYear();
            }
            if(time1.getMonth()==4)
            {
                document.getElementById("fisherman_date").innerText=time1.getDate()+'  '+'May'+' '+time1.getFullYear();
            }
            if(time1.getMonth()==5)
            {
                document.getElementById("fisherman_date").innerText=time1.getDate()+'  '+'June'+' '+time1.getFullYear();
            }
            if(time1.getMonth()==6)
            {
                document.getElementById("fisherman_date").innerText=time1.getDate()+'  '+'July'+' '+time1.getFullYear();
            }
            if(time1.getMonth()==7)
            {
                document.getElementById("fisherman_date").innerText=time1.getDate()+'  '+'August'+' '+time1.getFullYear();
            }
            if(time1.getMonth()==8)
            {
                document.getElementById("fisherman_date").innerText=time1.getDate()+'  '+'September'+' '+time1.getFullYear();
            }
            if(time1.getMonth()==9)
            {
                document.getElementById("fisherman_date").innerText=time1.getDate()+'  '+'October'+' '+time1.getFullYear();
            }
            if(time1.getMonth()==10)
            {
                document.getElementById("fisherman_date").innerText=time1.getDate()+'  '+'November'+' '+time1.getFullYear();
            }
            if(time1.getMonth()==11)
            {
                document.getElementById("fisherman_date").innerText=time1.getDate()+'  '+'December'+' '+time1.getFullYear();
            }

            //HATCHERY
            if(time2.getMonth()==0)
            {
                document.getElementById("hatchery_date").innerText=time2.getDate()+'  '+'Janaury'+' '+time2.getFullYear();
            }
            if(time2.getMonth()==1)
            {
                document.getElementById("hatchery_date").innerText=time2.getDate()+'  '+'Febraury'+' '+time2.getFullYear();
            }
            if(time2.getMonth()==2)
            {
                document.getElementById("hatchery_date").innerText=time2.getDate()+'  '+'March'+' '+time2.getFullYear();
            }
            if(time2.getMonth()==3)
            {
                document.getElementById("hatchery_date").innerText=time2.getDate()+'  '+'April'+' '+time2.getFullYear();
            }
            if(time2.getMonth()==4)
            {
                document.getElementById("hatchery_date").innerText=time2.getDate()+'  '+'May'+' '+time2.getFullYear();
            }
            if(time2.getMonth()==5)
            {
                document.getElementById("hatchery_date").innerText=time2.getDate()+'  '+'June'+' '+time2.getFullYear();
            }
            if(time2.getMonth()==6)
            {
                document.getElementById("hatchery_date").innerText=time2.getDate()+'  '+'July'+' '+time2.getFullYear();
            }
            if(time2.getMonth()==7)
            {
                document.getElementById("hatchery_date").innerText=time2.getDate()+'  '+'August'+' '+time2.getFullYear();
            }
            if(time2.getMonth()==8)
            {
                document.getElementById("hatchery_date").innerText=time2.getDate()+'  '+'September'+' '+time2.getFullYear();
            }
            if(time2.getMonth()==9)
            {
                document.getElementById("hatchery_date").innerText=time2.getDate()+'  '+'October'+' '+time2.getFullYear();
            }
            if(time2.getMonth()==10)
            {
                document.getElementById("hatchery_date").innerText=time2.getDate()+'  '+'November'+' '+time2.getFullYear();
            }
            if(time2.getMonth()==11)
            {
                document.getElementById("hatchery_date").innerText=time2.getDate()+'  '+'December'+' '+time2.getFullYear();
            }


            //DISTRIBUTOR
            if(time3.getMonth()==0)
            {
                document.getElementById("distributor_date").innerText=time3.getDate()+'  '+'Janaury'+' '+time3.getFullYear();
            }
            if(time3.getMonth()==1)
            {
                document.getElementById("distributor_date").innerText=time3.getDate()+'  '+'Febraury'+' '+time3.getFullYear();
            }
            if(time3.getMonth()==2)
            {
                document.getElementById("distributor_date").innerText=time3.getDate()+'  '+'March'+' '+time3.getFullYear();
            }
            if(time3.getMonth()==3)
            {
                document.getElementById("distributor_date").innerText=time3.getDate()+'  '+'April'+' '+time3.getFullYear();
            }
            if(time3.getMonth()==4)
            {
                document.getElementById("distributor_date").innerText=time3.getDate()+'  '+'May'+' '+time3.getFullYear();
            }
            if(time3.getMonth()==5)
            {
                document.getElementById("distributor_date").innerText=time3.getDate()+'  '+'June'+' '+time3.getFullYear();
            }
            if(time3.getMonth()==6)
            {
                document.getElementById("distributor_date").innerText=time3.getDate()+'  '+'July'+' '+time3.getFullYear();
            }
            if(time3.getMonth()==7)
            {
                document.getElementById("distributor_date").innerText=time3.getDate()+'  '+'August'+' '+time3.getFullYear();
            }
            if(time3.getMonth()==8)
            {
                document.getElementById("distributor_date").innerText=time3.getDate()+'  '+'September'+' '+time3.getFullYear();
            }
            if(time3.getMonth()==9)
            {
                document.getElementById("distributor_date").innerText=time3.getDate()+'  '+'October'+' '+time3.getFullYear();
            }
            if(time3.getMonth()==10)
            {
                document.getElementById("distributor_date").innerText=time3.getDate()+'  '+'November'+' '+time3.getFullYear();
            }
            if(time3.getMonth()==11)
            {
                document.getElementById("distributor_date").innerText=time3.getDate()+'  '+'December'+' '+time3.getFullYear();
            }
            
           
            

        }   
            // alert(time1.getDate()+'  '+time1.getMonth()+' '+time1.getFullYear())
            // document.getElementById("fisherman_date").innerText=time1.getDate()+'  '+time1.getMonth()+' '+time1.getFullYear();
            // document.getElementById("hatchery_date").innerText=time2.getDate()+'  '+time2.getMonth()+' '+time2.getFullYear();
            // document.getElementById("distributor_date").innerText=time3.getDate()+'  '+time3.getMonth()+' '+time3.getFullYear();
          })
})
}

    function logout()
    {
        localStorage.clear()
        window.location.href="../../index.html"
    }


   
    function logout()
    {
        localStorage.clear()
        window.location.href="../../index.html"
    }
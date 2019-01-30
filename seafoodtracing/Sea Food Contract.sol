pragma solidity >=0.4.22 <0.6.0;
​
contract seafood
{
  struct FishDetails{
    string FishName;
    string FishCompanyName;
    uint256 TrackingID;
    uint256 IOTDeviceID;
  }
  
  mapping(uint256=>FishDetails) public FishDB;
  mapping(uint256=>bool) public trackstatus;
  
  uint256 [] public nooftracks;
  
  function addFishDetail(string memory _fishname, string memory _fishcomapany, uint256 track_id, uint256 _iot_device)public returns(bool)
  {
    if(trackstatus[track_id]==false)
    {
      FishDB[track_id].FishName = _fishname;
      FishDB[track_id].FishCompanyName = _fishcomapany;
      FishDB[track_id].TrackingID = track_id;
      FishDB[track_id].IOTDeviceID = _iot_device;
      trackstatus[track_id]=true;
    
      nooftracks.push(track_id);
      return true;
    }
     return false;
  }
  
  function totaltracks() public view returns(uint256)
  {
    return nooftracks.length;
  }
}
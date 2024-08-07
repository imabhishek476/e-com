import axios from "axios";

export const handleCheckPincode = async (pincode) => {
    if (pincode.length !== 6) {
        return {error: true, result : 'Pincode must of 6 digits'}
    }

    // setLoading(true);
    // setError(null);
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`,{
        method: "GET",
      });
      const data = await response.json();
      console.log(data[0].Status)
      if (response.ok && data[0].Status === "Success") {
        return {error: false , result: "We can deliver in this pincode"};
      } else {
        return {error: true, result : "We cannot deliver in this pincode"}
      }
    } catch (err) {
      return {error: true, result : "An error occurred while checking the pincode"}  
    //   setError("An error occurred while checking the pincode");
    } finally {
    //   setLoading(false);
    }
  };
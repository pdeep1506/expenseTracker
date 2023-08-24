import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { dateConvertor } from "../../Utility/DateConvertor";

const CustomDatePicker = ({onDateChange}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [Currdate, setCurrdate] = useState('');
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    
  
    return (
      <View>
        <Button title={Currdate? Currdate.toString() : "Open Date Picker"} onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={(date)=>{
            const formatedDate = dateConvertor(date);
            setCurrdate(formatedDate)

            onDateChange(date)
            hideDatePicker();
          }}
          onCancel={hideDatePicker}
        />
      </View>
    
  );
}

export default CustomDatePicker

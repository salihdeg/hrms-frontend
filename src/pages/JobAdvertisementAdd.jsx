import { React, useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import SdTextInput from "../utilities/customFromControls/SdTextInput";
import SdSelect from "../utilities/customFromControls/SdSelect";
import CityService from "../services/CityService";
import PositionService from "../services/PositionService";

export default function JobAdvertisementAdd() {
  const [cities, setCities] = useState([]);
  const [positions, setPositions] = useState([]);
  let optionsCity = [];
  let optionsPosition = [];

  if (cities.length > 0) {
    for (let i = 0; i < cities.length; i++) {
      let option = { value: cities[i].id, label: cities[i].name };
      optionsCity.push(option);
    }
  }

  if (positions.length > 0) {
    for (let i = 0; i < positions.length; i++) {
      let option = { value: positions[i].id, label: positions[i].name };
      optionsPosition.push(option);
    }
  }
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  let lazim = `${year}-${month<10?`0${month}`:`${month}`}-${date}`
  const jobAdvertisementValues = {
    description: "",
    quota: "",
    creationDate: lazim,
    deadlineDate: "",
    city: "",
    position: "",
  };

  const jobAdvertisementSchema = Yup.object().shape({
    description: Yup.string().required("Açıklama Alanı Zorunludur"),
    quota: Yup.number().required("Kota Alanı Zorunludur"),
    creationDate: Yup.string().required("Oluşturma Tarihi Zorunludur"),
    deadlineDate: Yup.string().required("Son Başvuru Tarihi Zorunludur"),
    city: Yup.number().required("Lütfen Şehir Seçiniz"),
    position: Yup.string().required("Lütfen Pozisyon Seçiniz"),
  });

  useEffect(() => {
    let cityService = new CityService();
    let positionService = new PositionService();
    cityService.getAll().then((result) => setCities(result.data.data));
    positionService.getAll().then((result) => setPositions(result.data.data));
  }, []);
  

  console.log(lazim);

  return (
    <Formik
      initialValues={jobAdvertisementValues}
      validationSchema={jobAdvertisementSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">İlan Ekle</h1>
          <Form>
            <SdTextInput label="Açıklama" name="description" type="text" />
            <SdTextInput label="Kota" name="quota" type="number" />
            <SdTextInput
              label="Oluşturma Tarihi"
              name="creationDate"
              type="text"
              disabled
            />
            <SdTextInput
              label="Son Başvuru Tarihi"
              name="deadlineDate"
              type="text"
            />
            <SdSelect
              labelName="Şehir"
              options={optionsCity}
              value={formik.values.city}
              className={"input"}
              onChange={(value) => formik.setFieldValue("city", value.value)}
            />
            {formik.errors.city ? (
              <div className="errorText">{formik.errors.city}</div>
            ) : null}

            <SdSelect
              labelName="Pozisyon"
              options={optionsPosition}
              value={formik.values.position}
              className={"input"}
              onChange={(value) =>
                formik.setFieldValue("position", value.value)
              }
            />
            {formik.errors.position ? (
              <div className="errorText">{formik.errors.position}</div>
            ) : null}

            <Button
              style={{ marginTop: "2rem" }}
              className="custom-btn"
              type="submit"
            >
              Oluştur
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

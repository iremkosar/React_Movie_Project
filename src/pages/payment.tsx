import { useForm,SubmitHandler } from "react-hook-form";
import CustomInput from "../components/custominput";
import CustomButton from "../components/customButton";

type FormValues = {
    cardHolderName: string;
    cardNumber: string;
    expirationDate:string;
    cvv:string;
    postalCode:string;
  };

const PaymentForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormValues>({
        mode: "all",
        defaultValues: {},
      });
    
      const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        alert("Başarıyla kaydedildi");
      };

  return (
    <div className="w-screen h-screen overflow-x-hidden  bg-white text-black">
      <header>
        <p className="text-black font-bold text-xl leading-7 tracking-wider flex justify-center w-full">
          Cinemax
        </p>
      </header>
      <div className="flex 2xl:flex-row ss:flex-col w-full h-full">
        <div className="w-4/6 px-32 flex ss:justify-center mx-auto">
          <div className="bg-white p-8 gap-4 flex flex-col">
            <h2 className="text-2xl font-bold text-start">Payment Method</h2>

            <div className="flex flex-col gap-6 justify-center items-center max-w-xl">
              <div className="flex items-start w-full max-w-xl">
                <label className="w-full px-4 py-3 border rounded-3xl bg-inputgray flex items-center pr-Btn cursor-pointer">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 mr-4"
                  />
                  <svg
                    width="85"
                    height="24"
                    viewBox="0 0 85 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.80098 21.3582L5.12103 19.1122H4.37422H0.640137L3.20066 2.74855C3.20066 2.74855 3.20065 2.6416 3.30734 2.6416H3.41403H9.70863C11.7357 2.6416 13.2293 3.06941 13.9761 3.92503C14.2962 4.35284 14.5096 4.78065 14.6163 5.20846C14.723 5.74322 14.723 6.27797 14.6163 7.02664V7.45445L14.9364 7.66836C15.2564 7.77531 15.4698 7.98921 15.6832 8.20312C16.0032 8.52397 16.2166 8.95178 16.2166 9.48654C16.3233 10.0213 16.3233 10.663 16.1099 11.4117C15.8965 12.2673 15.6832 12.909 15.3631 13.5507C15.043 14.0855 14.6163 14.5133 14.1895 14.9411C13.7628 15.262 13.1226 15.4759 12.5892 15.6898C11.9491 15.7967 11.309 15.9037 10.5621 15.9037H10.0287C9.70863 15.9037 9.38857 16.0106 9.06851 16.2245C8.85513 16.4384 8.64175 16.7593 8.53507 17.0801V17.2941L7.89493 21.2513V21.3582V21.4652C7.89493 21.4652 7.89492 21.4652 7.78824 21.4652H4.80098V21.3582Z"
                      fill="#263577"
                    />
                    <path
                      d="M15.3619 7.02667C15.3619 7.13362 15.3619 7.24058 15.2552 7.34753C14.4017 11.6256 11.6278 13.016 8.00045 13.016H6.18674C5.75998 13.016 5.33324 13.3369 5.33324 13.7647L4.37304 19.754L4.15967 21.4652C4.15967 21.7861 4.37304 22 4.58641 22H7.89375C8.3205 22 8.64057 21.6791 8.64057 21.3583V21.1444L9.2807 17.2941V17.0802C9.38739 16.6524 9.70745 16.4385 10.0275 16.4385H10.561C13.7616 16.4385 16.2154 15.155 16.8555 11.4117C17.1756 9.80743 16.9622 8.52401 16.2154 7.66839C16.0021 7.45448 15.682 7.24058 15.3619 7.02667Z"
                      fill="#2199D6"
                    />
                    <path
                      d="M14.5087 6.70587C14.402 6.70587 14.2953 6.59891 14.0819 6.59891C13.9752 6.59891 13.7618 6.49196 13.6552 6.49196C13.1217 6.38501 12.5883 6.38501 12.0548 6.38501H7.14719C7.0405 6.38501 6.93381 6.38501 6.82712 6.49196C6.61375 6.59891 6.40038 6.81282 6.40038 7.02672L5.3335 13.6578V13.8717C5.44018 13.4439 5.76024 13.123 6.18699 13.123H8.0007C11.6281 13.123 14.402 11.6257 15.2555 7.45453C15.2555 7.34758 15.2555 7.24063 15.3622 7.13368C15.1488 7.02672 14.9354 6.91977 14.722 6.81282C14.6153 6.70587 14.5087 6.70587 14.5087 6.70587Z"
                      fill="#252C5E"
                    />
                    <path
                      d="M6.40129 7.02675C6.40129 6.81285 6.61466 6.59894 6.82803 6.49199C6.93472 6.49199 7.04141 6.38504 7.1481 6.38504H12.0557C12.5892 6.38504 13.2293 6.38504 13.6561 6.49199C13.7628 6.49199 13.9761 6.49199 14.0828 6.59894C14.1895 6.59894 14.2962 6.70589 14.5096 6.70589C14.6163 6.70589 14.6163 6.7059 14.7229 6.81285C14.9363 6.9198 15.1497 7.02675 15.3631 7.1337C15.5765 5.52942 15.3631 4.4599 14.5096 3.49733C13.5494 2.42781 11.8424 2 9.70861 2H3.41402C2.98726 2 2.56051 2.32085 2.56051 2.74866L0 19.2193C0 19.5402 0.213376 19.861 0.533441 19.861H4.3742L5.33441 13.6578L6.40129 7.02675Z"
                      fill="#263577"
                    />
                    <path
                      d="M25.3191 19L27.4924 5.90909H32.6572C33.6458 5.90909 34.4576 6.09872 35.0926 6.47798C35.7318 6.85298 36.1792 7.375 36.4349 8.04403C36.6948 8.70881 36.7545 9.47585 36.6139 10.3452C36.469 11.2187 36.1536 11.9879 35.6678 12.6527C35.1863 13.3132 34.5599 13.8288 33.7886 14.1996C33.0173 14.5703 32.1266 14.7557 31.1167 14.7557H27.8248L28.1891 12.5376H31.0336C31.5705 12.5376 32.0286 12.446 32.4079 12.2628C32.7914 12.0753 33.0961 11.8175 33.322 11.4893C33.5478 11.157 33.6948 10.7756 33.763 10.3452C33.8354 9.90625 33.812 9.52486 33.6927 9.20099C33.5734 8.87713 33.3539 8.62571 33.0343 8.44673C32.719 8.26349 32.295 8.17188 31.7623 8.17188H29.8958L28.0869 19H25.3191ZM39.4328 19.1854C38.8106 19.1854 38.2715 19.0767 37.8156 18.8594C37.3639 18.6378 37.0315 18.3097 36.8184 17.875C36.6053 17.4403 36.5521 16.9013 36.6586 16.2578C36.7524 15.7124 36.9292 15.2564 37.1891 14.8899C37.4533 14.5192 37.7751 14.2209 38.1543 13.995C38.5336 13.7692 38.9533 13.5966 39.4136 13.4773C39.8781 13.358 40.3575 13.277 40.8518 13.2344C41.4228 13.1747 41.8873 13.1172 42.2453 13.0618C42.6075 13.0064 42.8781 12.9276 43.057 12.8253C43.236 12.7187 43.3447 12.5611 43.383 12.3523V12.3139C43.447 11.9134 43.3724 11.6023 43.1593 11.3807C42.9505 11.1548 42.616 11.0419 42.1558 11.0419C41.67 11.0419 41.2566 11.1484 40.9157 11.3615C40.5791 11.5746 40.3383 11.8452 40.1934 12.1733L37.7133 11.9688C37.9349 11.3722 38.2694 10.8565 38.7168 10.4219C39.1685 9.98295 39.7119 9.64631 40.3468 9.41193C40.9818 9.1733 41.6934 9.05398 42.4818 9.05398C43.0272 9.05398 43.5364 9.1179 44.0095 9.24574C44.4867 9.37358 44.8979 9.57173 45.2431 9.8402C45.5926 10.1087 45.844 10.4538 45.9974 10.8757C46.1551 11.2933 46.187 11.794 46.0933 12.3778L44.9874 19H42.4051L42.6352 17.6385H42.5585C42.3497 17.9453 42.094 18.2159 41.7914 18.4503C41.4889 18.6804 41.1416 18.8615 40.7495 18.9936C40.3575 19.1214 39.9185 19.1854 39.4328 19.1854ZM40.5258 17.3061C40.9221 17.3061 41.2864 17.2273 41.6188 17.0696C41.9555 16.9077 42.2325 16.6903 42.4498 16.4176C42.6714 16.1449 42.812 15.8359 42.8717 15.4908L43.0379 14.4489C42.9526 14.5043 42.8291 14.5533 42.6671 14.5959C42.5095 14.6385 42.3369 14.679 42.1494 14.7173C41.9661 14.7514 41.7808 14.7834 41.5933 14.8132C41.4058 14.8388 41.2374 14.8643 41.0883 14.8899C40.7602 14.9368 40.4661 15.0114 40.2062 15.1136C39.9462 15.2159 39.7353 15.3544 39.5734 15.5291C39.4114 15.6996 39.3113 15.9126 39.2729 16.1683C39.2133 16.5391 39.3006 16.8224 39.535 17.0185C39.7737 17.2102 40.1039 17.3061 40.5258 17.3061ZM47.8287 22.6818C47.4793 22.6818 47.1597 22.6541 46.8699 22.5987C46.5801 22.5476 46.3415 22.4815 46.154 22.4006L47.1128 20.3679C47.4153 20.4659 47.6902 20.517 47.9374 20.5213C48.1888 20.5256 48.4189 20.4616 48.6277 20.3295C48.8365 20.1974 49.0283 19.9801 49.203 19.6776L49.4459 19.2621L47.605 9.18182H50.3663L51.1973 16.4048H51.2996L54.5531 9.18182H57.5382L51.9196 20.0611C51.6426 20.5938 51.3145 21.0561 50.9352 21.4482C50.5602 21.8402 50.1149 22.1428 49.5993 22.3558C49.0879 22.5732 48.4977 22.6818 47.8287 22.6818ZM57.3465 19L59.5198 5.90909H64.6845C65.6732 5.90909 66.485 6.09872 67.1199 6.47798C67.7591 6.85298 68.2065 7.375 68.4622 8.04403C68.7222 8.70881 68.7818 9.47585 68.6412 10.3452C68.4963 11.2187 68.181 11.9879 67.6952 12.6527C67.2136 13.3132 66.5872 13.8288 65.8159 14.1996C65.0446 14.5703 64.154 14.7557 63.144 14.7557H59.8521L60.2165 12.5376H63.0609C63.5979 12.5376 64.056 12.446 64.4352 12.2628C64.8188 12.0753 65.1234 11.8175 65.3493 11.4893C65.5752 11.157 65.7222 10.7756 65.7904 10.3452C65.8628 9.90625 65.8394 9.52486 65.72 9.20099C65.6007 8.87713 65.3813 8.62571 65.0617 8.44673C64.7463 8.26349 64.3223 8.17188 63.7896 8.17188H61.9232L60.1142 19H57.3465ZM71.4601 19.1854C70.8379 19.1854 70.2989 19.0767 69.8429 18.8594C69.3912 18.6378 69.0588 18.3097 68.8457 17.875C68.6327 17.4403 68.5794 16.9013 68.6859 16.2578C68.7797 15.7124 68.9565 15.2564 69.2165 14.8899C69.4807 14.5192 69.8024 14.2209 70.1817 13.995C70.5609 13.7692 70.9807 13.5966 71.4409 13.4773C71.9054 13.358 72.3848 13.277 72.8791 13.2344C73.4502 13.1747 73.9146 13.1172 74.2726 13.0618C74.6348 13.0064 74.9054 12.9276 75.0844 12.8253C75.2634 12.7187 75.372 12.5611 75.4104 12.3523V12.3139C75.4743 11.9134 75.3997 11.6023 75.1867 11.3807C74.9778 11.1548 74.6433 11.0419 74.1831 11.0419C73.6973 11.0419 73.284 11.1484 72.943 11.3615C72.6064 11.5746 72.3656 11.8452 72.2207 12.1733L69.7406 11.9688C69.9622 11.3722 70.2967 10.8565 70.7442 10.4219C71.1959 9.98295 71.7392 9.64631 72.3742 9.41193C73.0091 9.1733 73.7207 9.05398 74.5091 9.05398C75.0546 9.05398 75.5638 9.1179 76.0368 9.24574C76.5141 9.37358 76.9253 9.57173 77.2705 9.8402C77.6199 10.1087 77.8713 10.4538 78.0247 10.8757C78.1824 11.2933 78.2144 11.794 78.1206 12.3778L77.0148 19H74.4324L74.6625 17.6385H74.5858C74.377 17.9453 74.1213 18.2159 73.8188 18.4503C73.5162 18.6804 73.1689 18.8615 72.7769 18.9936C72.3848 19.1214 71.9459 19.1854 71.4601 19.1854ZM72.5531 17.3061C72.9494 17.3061 73.3138 17.2273 73.6462 17.0696C73.9828 16.9077 74.2598 16.6903 74.4771 16.4176C74.6987 16.1449 74.8394 15.8359 74.899 15.4908L75.0652 14.4489C74.98 14.5043 74.8564 14.5533 74.6945 14.5959C74.5368 14.6385 74.3642 14.679 74.1767 14.7173C73.9935 14.7514 73.8081 14.7834 73.6206 14.8132C73.4331 14.8388 73.2648 14.8643 73.1156 14.8899C72.7875 14.9368 72.4935 15.0114 72.2335 15.1136C71.9736 15.2159 71.7627 15.3544 71.6007 15.5291C71.4388 15.6996 71.3386 15.9126 71.3003 16.1683C71.2406 16.5391 71.328 16.8224 71.5624 17.0185C71.801 17.2102 72.1313 17.3061 72.5531 17.3061ZM84.0237 5.90909L81.8504 19H79.1274L81.3006 5.90909H84.0237Z"
                      fill="#171725"
                    />
                  </svg>
                </label>
              </div>

              <div className="flex items-start w-full">
                <label className="w-full px-4 py-3 border rounded-3xl bg-inputgray flex items-center pr-Btn cursor-pointer">
                  <input
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 mr-4"
                  />
                  <svg
                    width="54"
                    height="24"
                    viewBox="0 0 54 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.86689 3.0942C9.23401 3.90486 8.2214 4.54425 7.20878 4.45291C7.08221 3.35681 7.57796 2.1922 8.15811 1.47289C8.79099 0.639392 9.89854 0.0456709 10.7951 0C10.9006 1.14177 10.4892 2.26071 9.86689 3.0942ZM10.7845 4.66978C9.89238 4.61421 9.07839 4.96019 8.4209 5.23965C7.99779 5.41949 7.63949 5.57178 7.36691 5.57178C7.06101 5.57178 6.68792 5.41135 6.26903 5.23122C5.72014 4.99519 5.09261 4.72534 4.43455 4.73829C2.92617 4.76113 1.52328 5.68596 0.753273 7.15884C-0.828936 10.1046 0.341899 14.4662 1.87137 16.8639C2.62028 18.0513 3.51686 19.353 4.69825 19.3073C5.21799 19.2861 5.59185 19.1143 5.97877 18.9366C6.42422 18.732 6.88697 18.5195 7.60951 18.5195C8.30701 18.5195 8.74952 18.7265 9.1743 18.9252C9.5782 19.1141 9.96607 19.2956 10.5419 19.2845C11.7654 19.2616 12.5355 18.097 13.2844 16.9096C14.0926 15.6351 14.4477 14.3913 14.5016 14.2026L14.5079 14.1807C14.5067 14.1793 14.4967 14.1744 14.4791 14.1657C14.2089 14.0318 12.1439 13.0085 12.1241 10.2645C12.1042 7.96126 13.762 6.79431 14.0229 6.61061C14.0388 6.59943 14.0495 6.59189 14.0544 6.58796C12.9996 4.89814 11.3541 4.71546 10.7845 4.66978ZM19.2547 19.1589V1.35867H25.4253C28.6108 1.35867 30.8364 3.73355 30.8364 7.20453C30.8364 10.6755 28.5686 13.0732 25.3409 13.0732H21.8073V19.1589H19.2547ZM21.807 3.688H24.75C26.965 3.688 28.2308 4.96678 28.2308 7.21607C28.2308 9.46536 26.965 10.7556 24.7394 10.7556H21.807V3.688ZM39.2645 17.0237C38.5894 18.4167 37.1021 19.2958 35.4988 19.2958C33.1255 19.2958 31.4694 17.7659 31.4694 15.4595C31.4694 13.176 33.0727 11.8629 36.0367 11.6688L39.2223 11.4633V10.4814C39.2223 9.03132 38.3468 8.2435 36.7857 8.2435C35.4988 8.2435 34.56 8.96282 34.3701 10.0589H32.0707C32.1445 7.75254 34.1486 6.07414 36.8595 6.07414C39.7813 6.07414 41.68 7.72971 41.68 10.2987V19.1588H39.3172V17.0237H39.2645ZM36.1843 17.1837C34.8236 17.1837 33.9586 16.4758 33.9586 15.3911C33.9586 14.2722 34.7919 13.6214 36.3847 13.5186L39.2221 13.3245V14.3293C39.2221 15.9963 37.9142 17.1837 36.1843 17.1837ZM49.5171 19.8554C48.4939 22.9724 47.3231 24 44.8337 24C44.6439 24 44.011 23.9772 43.8633 23.9315V21.7964C44.0215 21.8192 44.4118 21.8421 44.6122 21.8421C45.7409 21.8421 46.3737 21.3283 46.764 19.9924L46.9961 19.2046L42.6714 6.24547H45.34L48.3462 16.7612H48.399L51.4052 6.24547H54L49.5171 19.8554Z"
                      fill="#171725"
                    />
                  </svg>
                </label>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Cardholder Name */}
              <div className="mb-4 w-3/4">
              <label
                    htmlFor="cardHolderName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Cardholder Name
                  </label>
                <CustomInput
                  id="cardHolderName"
                  {...register("cardHolderName", {
                    required: "Cardholder name is required",
                    minLength: {
                      value: 1,
                      message:
                        "Cardholder name must be at least 1 character long",
                    },
                    maxLength: {
                      value: 32,
                      message: "Cardholder name cannot exceed 32 characters",
                    },
                  })}
                  className={`w-full px-4 ${
                    errors.cardHolderName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.cardHolderName && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.cardHolderName.message}
                  </p>
                )}
              </div>

              <div className="flex flex-row gap-2">
                {/* Card Number */}
                <div className="mb-4 w-(3/2)/4">
                  <label
                    htmlFor="cardNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Card Number
                  </label>
                  <CustomInput
                    id="cardNumber"
                    {...register("cardNumber", {
                      required: "Card number is required",
                      pattern: {
                        value: /^[0-9]{16}$/,
                        message: "Card number must be 16 digits",
                      },
                    })}
                    className={`w-full px-4 ${
                      errors.cardNumber ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.cardNumber && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.cardNumber.message}
                    </p>
                  )}
                </div>

                {/* Expiration */}
                <div className="mb-4 w-1/4">
                  <label
                    htmlFor="expirationDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expiration (MM/YY)
                  </label>
                  <CustomInput
                    max={16}
                    id="expirationDate"
                    {...register("expirationDate", {
                      required: "Expiration date is required",
                      pattern: {
                        value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                        message: "Invalid expiration date format. Use MM/YY",
                      },
                    })}
                    className={`w-full px-3 ${
                      errors.expirationDate
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.expirationDate && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.expirationDate.message}
                    </p>
                  )}
                </div>

                {/* CVV */}
                <div className="mb-4 w-1/4">
                  <label
                    htmlFor="cvv"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVV
                  </label>
                  <CustomInput
                    id="cvv"
                    {...register("cvv", {
                      required: "CVV is required",
                      pattern: {
                        value: /^[0-9]{3}$/,
                        message: "CVV must be 3 digits",
                      },
                    })}
                    className={`w-full px-3 ${
                      errors.cvv ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.cvv && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.cvv.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Postal Code */}
              <div className="mb-4">
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postal Code
                </label>
                <CustomInput
                  id="postalCode"
                  {...register("postalCode", {
                    required: "Postal code is required",
                    minLength: {
                      value: 3,
                      message: "Postal code must be at least 3 characters long",
                    },
                    maxLength: {
                      value: 12,
                      message: "Postal code cannot exceed 12 characters",
                    },
                  })}
                  className={`px-3 ${
                    errors.postalCode ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.postalCode && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.postalCode.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <CustomButton
                  type="submit"
                  className="px-64 py-4 items-center flex ss:justify-center ss:px-32 ss:py-2"
                >
                  <span className="text-white font-semibold text-lg leading-6 tracking-wider mx-auto">
                    Pay
                  </span>
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
        <div className="w-3/6 2xl:bg-inputgray ss:bg-white  flex flex-col gap-4 pt-4 justify-start items-start mt-6 ss:justify-center mx-auto ">
          <div className="flex flex-row 2xl:gap-px2 ss:gap-8 mx-auto ">
            <p className="text-Gray font-medium text-lg leading-6 tracking-wider">
              Subtotal
            </p>
            <p className="text-black font-semibold text-lg leading-6 tracking-wider">
              $4.99
            </p>
          </div>
          <div className="flex flex-row 2xl:gap-96 ss:gap-8 mx-auto ">
            <p className=" text-Gray font-medium text-lg leading-6 tracking-wider">
              Plan type
            </p>
            <p className="text-black font-semibold text-lg leading-6 tracking-wider">
              Monthly
            </p>
          </div>
          <div className="flex flex-row 2xl:gap-80 ss:gap-8 mx-auto ">
            <p className=" text-Gray font-medium text-lg leading-6 tracking-wider">
              Monthly plan discount
            </p>
            <p className="text-black font-semibold text-lg leading-6 tracking-wider">
              -$5
            </p>
          </div>
          <div className="h-0.5 w-4/6 bg-line flex justify-center items-center mx-auto"></div>
          <div className="flex flex-row 2xl:gap-px ss:gap-8 mx-auto ">
            <p className=" text-Gray font-medium text-lg leading-6 tracking-wider">
              Billed Now
            </p>
            <p className="text-customPurple font-semibold text-lg leading-6 tracking-wider">
              $35
            </p>
          </div>
          <p className="text-payGray font-medium text-sm leading-snug tracking-wider mx-48 mt-6 flex ss:justify-center ss:mx-auto">
            You will be charged $5 yearly thereafter while the subscription is
            active. Cancel any time.
          </p>
          {/* <div className="flex justify-center 2xl:mx-48 mt-6">
            <CustomButton
              type="submit"
              className="px-64 py-4 items-center flex ss:justify-center ss:px-32 ss:py-2 "
            >
              <span className="text-white font-semibold text-lg leading-6 tracking-wider mx-auto">
                Pay
              </span>
            </CustomButton>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;

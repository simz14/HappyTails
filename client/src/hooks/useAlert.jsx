import Swal from "sweetalert2";

const useAlert = () => {
  const success = (title, description) => {
    Swal.fire(title, description, "success");
  };
  const error = (title, description) => {
    Swal.fire(title, description, "error");
  };
  const confirm = async (title, confirmText, denyText) => {
    const alertResult = await Swal.fire({
      title: title,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: confirmText,
      denyButtonText: denyText,
    });
    if (alertResult.isConfirmed) {
      Swal.fire("Success", "", "success");
    }
  };

  return { success, error, confirm };
};

export default useAlert;

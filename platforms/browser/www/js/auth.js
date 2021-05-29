$(document).ready(function () {
  //var url = "https://sanfranciscodekkerlab.com/matriz/auth.php?callback=?";
  var url = "http://localhost/DEKKERADMIN/auth.php?callback=?";
  //var url = "https://sanfranciscodekkerlab.com/matriz/auth.php?callback=?";

  //Login Function
  $("#login").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();
    var dataString = "email=" + email + "&password=" + password + "&login=";
    if (($.trim(email).length > 0) & ($.trim(password).length > 0)) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          $("#login").html("Conectando...");
        },
        success: function (data) {
          if (data != "fail") {
            localStorage.login = "true";
            localStorage.email = email;
            // Obteniendo todas las claves del JSON
            var json = data;
            for (var clave in json) {
              localStorage.idCliente = JSON.parse(json).idCliente;
              localStorage.fullname = JSON.parse(json).nombreCompleto;
              localStorage.taller = JSON.parse(json).taller;
              localStorage.telefono = JSON.parse(json).telefono;
              localStorage.celular = JSON.parse(json).celular;
              localStorage.direccion = JSON.parse(json).direccion;
              localStorage.ProductosAdd = "[]";
            }
            //alert("Bienvenido a DEKKERAPP");

            swal({
              title: "DEKKERAPP",
              text: "Bienvenido",
              icon: "info",
              button: true,
              dangerMode: false,
            }).then((willDelete) => {
              if (willDelete) {
                window.location.href = "index.html";
              }
            });
          } else if (data == "fail") {
            swal("Algo Salio Mal", "verifique su correo o contraseña", "error");
            //alert("Error verifique su correo o contraseña");
            $("#login").html("Acceder");
          }
        },
      });
    } else {
      swal("Llenar Todos los Campos...", "", "info");
    }
    return false;
  });

  /*
    //Funcion de registro
    $("#signup").click(function() {
        var fullname = $("#fullname").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var taller = $("#taller").val();
        var telefono = $("#telefono").val();
        var celular = $("#celular").val();
        var calle = $("#calle").val();
        var colonia = $("#colonia").val();
        var estado = $("#estado").val();
        var municipio = $("#municipio").val();
        var cp = $("#cp").val();
        var direccion = calle + "," + colonia + "," + estado + "," + municipio + "," + cp;
        var dataString = "fullname=" + fullname + "&email=" + email + "&password=" + password + "&taller=" + taller + "&telefono=" + telefono + "&celular=" + celular + "&direccion=" + direccion + "&signup=";
        if ($.trim(fullname).length > 0 & $.trim(email).length > 0 & $.trim(password).length > 0 & $.trim(taller).length > 0 & $.trim(celular).length > 0 & $.trim(calle).length > 0 & $.trim(colonia).length > 0 & $.trim(estado).length > 0 & $.trim(municipio).length > 0 & $.trim(cp).length > 0 & $.trim(direccion).length > 0) {
            $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function() {
                    $("#signup").val('Validando...');
                },
                success: function(data) {
                    if (data == "success") {
                        alert("Gracias por registrarse puede iniciar sesión ahora");
                        window.location.href = "login.html";
                    } else if (data = "exist") {
                        alert("Hey! Su cuenta ya se encuentra registrada! puede iniciar sesión ahora");
                    } else if (data = "failed") {
                        alert("Ocurrio un error");
                    }
                }
            });
        } else {
            alert("Llenar los campos obligatorios.*");
        }
        return false;
    });
    */
  //Funcion de registro
  $("#signup").click(function () {
    var fullname = $("#fullname").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var taller = $("#taller").val();
    var telefono = $("#telefono").val();
    var celular = $("#celular").val();
    var calle = $("#route").val();
    var numero = $("#street_number").val();
    var colonia = $("#sublocality_level_1").val();
    var estado = $("#administrative_area_level_1").val();
    var ciudad = $("#locality").val();
    var cp = $("#postal_code").val();
    var direccion =
      calle +
      "," +
      numero +
      "," +
      colonia +
      "," +
      estado +
      "," +
      ciudad +
      "," +
      cp;

    var latitud = localStorage.getItem("Latitud");

    var longitud = localStorage.getItem("Longitud");

    var dataString =
      "fullname=" +
      fullname +
      "&email=" +
      email +
      "&password=" +
      password +
      "&taller=" +
      taller +
      "&telefono=" +
      telefono +
      "&celular=" +
      celular +
      "&direccion=" +
      direccion +
      "&latitud=" +
      latitud +
      "&longitud=" +
      longitud +
      "&signup=";
    if (
      ($.trim(fullname).length > 0) &
      ($.trim(email).length > 0) &
      ($.trim(password).length > 0) &
      ($.trim(taller).length > 0) &
      ($.trim(celular).length > 0) &
      ($.trim(calle).length > 0) &
      ($.trim(numero).length > 0) &
      ($.trim(colonia).length > 0) &
      ($.trim(estado).length > 0) &
      ($.trim(ciudad).length > 0) &
      ($.trim(cp).length > 0) &
      ($.trim(direccion).length > 0) &
      ($.trim(latitud).length > 0) &
      ($.trim(longitud).length > 0)
    ) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          $("#signup").val("Validando...");
        },
        success: function (data) {
          if (data == "success") {
            swal(
              "Gracias por registrarse",
              "puede iniciar sesión ahora",
              "success"
            );
            window.location.href = "login.html";
          } else if ((data = "exist")) {
            swal(
              "Hey! Su cuenta ya se encuentra registrada!",
              "puede iniciar sesión ahora",
              "info"
            );
          } else if ((data = "failed")) {
            swal("Algo Salio Mal..", "Ocurrio un Error", "error");
          }
        },
      });
    } else {
      swal("Llenar Todos los Campos...*", "", "info");
    }
    return false;
  });
  /**
   * GUARDAR DATOS DE FACTURACION
   */
  $("#guardarDatosFacturacion").click(function () {
    var idCliente = localStorage.idCliente;
    var rfc = $("#rfc").val();
    var razonSocial = $("#razonSocial").val();
    var dirFiscal = $("#dirFiscal").val();
    var cp = $("#cp").val();
    var correoEnvio = $("#correoEnvio").val();
    var cfdi = $("#cfdi").val();

    console.log("Uso Cfdi...", cfdi);

    var dataString =
      "idCliente=" +
      idCliente +
      "&rfc=" +
      rfc +
      "&razonSocial=" +
      razonSocial +
      "&dirFiscal=" +
      dirFiscal +
      "&cp=" +
      cp +
      "&correoEnvio=" +
      correoEnvio +
      "&cfdi=" +
      cfdi +
      "&datosFacturacion=";
    if (
      ($.trim(idCliente).length > 0) &
      ($.trim(rfc).length > 0) &
      ($.trim(razonSocial).length > 0) &
      ($.trim(dirFiscal).length > 0) &
      ($.trim(cp).length > 0) &
      ($.trim(correoEnvio).length > 0) &
      ($.trim(cfdi).length > 0)
    ) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          $("#guardarDatosFacturacion").val("Guardando...");
        },
        success: function (data) {
          if (data == "success") {
            swal("", "Datos guardados", "success");
            window.location.href = "index.html";
          } else if ((data = "failed")) {
            swal("Algo Salio Mal..", "Ocurrio un Error", "error");
          }
        },
      });
    } else {
      swal("Llenar Todos los Campos...*", "", "info");
    }
    return false;
  });
  /**
   * EDITAR DATOOS DE FACTURACION
   */
  $("#editarDatosFacturacion").on("click", "#guardarCambiosEdit", function () {
    var idCliente = localStorage.idCliente;
    var editarRfc = $("#editarRfc").val();
    var editarRazonSocial = $("#editarRazonSocial").val();
    var editarDirFiscal = $("#editarDirFiscal").val();
    var editarCp = $("#editarCp").val();
    var editarCorreoEnvio = $("#editarCorreoEnvio").val();
    var editarCfdi = $("#editarCfdi").val();

    var dataString =
      "idCliente=" +
      idCliente +
      "&editarRfc=" +
      editarRfc +
      "&editarRazonSocial=" +
      editarRazonSocial +
      "&editarDirFiscal=" +
      editarDirFiscal +
      "&editarCp=" +
      editarCp +
      "&editarCorreoEnvio=" +
      editarCorreoEnvio +
      "&editarCfdi=" +
      editarCfdi +
      "&actualizarDatosFacturacion=";
    if (
      ($.trim(idCliente).length > 0) &
      ($.trim(editarRfc).length > 0) &
      ($.trim(editarRazonSocial).length > 0) &
      ($.trim(editarDirFiscal).length > 0) &
      ($.trim(editarCp).length > 0) &
      ($.trim(editarCorreoEnvio).length > 0) &
      ($.trim(editarCfdi).length > 0)
    ) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {},
        success: function (data) {
          if ((data = "success")) {
            swal("", "Datos Actualizados.", "success");
            console.log(data);
            var dataString =
              "idCliente=" + idCliente + "&listarDatosFacturacion=";
            if ($.trim(idCliente).length > 0) {
              $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function () {},
                success: function (data) {
                  if (data != "failed") {
                    localStorage.arregloDatosFacturacion = data;

                    //console.log(localStorage.arregloDatosFacturacion);
                    window.location.href = "datosFacturacion.html";
                  } else if (data == "failed") {
                    swal("No hay Conexión...", "", "info");
                  }
                },
              });
            } else {
              swal("Ha Ocurrido un Error", "", "error");
            }
            return false;
          } else if ((data = "failed")) {
            swal("Algo Salio Mal", "Ocurrio un error", "error");
          }
        },
      });
    } else {
      swal("Alto!", "Debe Llenar todos los campos", "info");
    }
    return false;
  });

  //Funcion de envio de correo
  $("#formContact").click(function () {
    var nameApellidos = $("#nameApellido").val();
    var emailContacto = $("#emailContacto").val();
    var comentariosContacto = $("#comentariosContacto").val();
    var dataString =
      "nameApellidos=" +
      nameApellidos +
      "&emailContacto=" +
      emailContacto +
      "&comentariosContacto=" +
      comentariosContacto +
      "&formContact=";
    if (
      ($.trim(nameApellidos).length > 0) &
      ($.trim(emailContacto).length > 0) &
      ($.trim(comentariosContacto).length > 0)
    ) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          $("#formContact").val("Enviando mensaje...");
        },
        success: function (data) {
          if (data == "invalid") {
            swal("", "No ha sido posible enviar el mensaje.", "info");
          } else if ((data = "success")) {
            swal("Exito!", "La petición ha sido enviada con exito.", "success");
            window.location.href = "index.html";
          }
        },
      });
    } else {
      swal("Alto!", "Debe Llenar todos los campos.", "info");
    }
    return false;
  });
  //Change Password
  $("#change_password").click(function () {
    var email = localStorage.email;
    var old_password = $("#old_password").val();
    var new_password = $("#new_password").val();
    var dataString =
      "old_password=" +
      old_password +
      "&new_password=" +
      new_password +
      "&email=" +
      email +
      "&change_password=";
    if (($.trim(old_password).length > 0) & ($.trim(old_password).length > 0)) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          $("#change_password").val("Conectando...");
        },
        success: function (data) {
          if (data == "incorrect") {
            swal("Upss", "Su contraseña anterior es incorrecta.", "info");
          } else if ((data = "success")) {
            swal("", "Contraseña cambiada satisfactoriamente.", "success");
            window.location.href = "ver-perfil.html";
          } else if ((data = "failed")) {
            swal("Algo Salio Mal", "Ocurrio un error", "error");
          }
        },
      });
    } else {
      swal("Alto!", "Debe Llenar todos los campos", "info");
    }
    return false;
  });
  //Forget Password
  $("#forget_password").click(function () {
    var email = $("#email").val();
    var dataString = "email=" + email + "&forget_password=";
    if ($.trim(email).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          $("#forget_password").val("Enviando....");
          $("#forget_password").attr("disabled", true);
        },
        success: function (data) {
          if (data == "invalid") {
            $("#forget_password").removeAttr("disabled", true);
            //alert("Su cuenta no se encuentra registrada");
            swal(
              "Algo salio Mal",
              "Su cuenta no se encuentra registrada",
              "info"
            );
          } else if ((data = "success")) {
            swal(
              "",
              "La contraseña ha sido enviada a la cuenta de correo, porfavor revise",
              "success"
            );
            //alert("La contraseña ha sido enviada a la cuenta de correo, porfavor revise");
            window.location.href = "login.html";
          }
        },
      });
    } else {
      swal("Alto!", "Llenar los campos obligatorios.*", "info");
    }
    return false;
  });
  //AGREGAR FORMA DE PAGO
  $("#formaDePago").change(function () {
    var formaPago = $("#formaDePago").val();

    localStorage.setItem("formaPago", formaPago);
  });
  //SOLICITUD DE PROCESO
  $("#formProcesarSolicitud").click(function () {
    var observacionesSolicitud = $("#observacionesSolicitud").val();

    var observacionesProductos = $("#observacionesProductos").val();

    if (typeof observacionesSolicitud === "undefined") {
      var observaciones = "";
      localStorage.setItem("observacionesSolicitud", observaciones);
      var ob1 = false;
    } else {
      var observaciones = $("#observacionesSolicitud").val();
      localStorage.setItem("observacionesSolicitud", observaciones);
      var ob1 = true;
    }
    if (typeof observacionesProductos === "undefined") {
      var observacionesProductos = "";
      localStorage.setItem("observacionesProductos", observacionesProductos);
      var ob2 = false;
    } else {
      var observacionesProductos = $("#observacionesProductos").val();
      localStorage.setItem("observacionesProductos", observacionesProductos);
      var ob2 = true;
    }

    var formaPago = $("#formaDePago").val();

    if (formaPago === "EFECTIVO") {
      localStorage.setItem("formaPago", "EFECTIVO");
    } else {
    }

    var listaProductos = localStorage.ProductosAdd;
    var sucursalElegida = localStorage.sucursal;
    var nombreCliente = localStorage.fullname;
    var idCliente = localStorage.idCliente;
    var formaPago = localStorage.formaPago;
    var dataString =
      "observacionesSolicitud=" +
      observaciones +
      "&observacionesProductos=" +
      observacionesProductos +
      "&listaProductos=" +
      listaProductos +
      "&sucursalElegida=" +
      sucursalElegida +
      "&nombreCliente=" +
      nombreCliente +
      "&idCliente=" +
      idCliente +
      "&formaPago=" +
      formaPago +
      "&solicitudProceso=";

    if (sucursalElegida === undefined) {
      swal({
        title: "Alto!",
        text: "No se ha seleccionado una Sucursal",
        icon: "warning",
        buttons: {
          default: "OK!",
        },
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          window.location.href = "elegirSucursales.html";
        }
      });
    } else if (sucursalElegida != undefined) {
      if (
        (listaProductos == "[]" &&
          ob1 == true &&
          observacionesProductos == "" &&
          ob2 == false) ||
        observacionesProductos != ""
      ) {
        swal({
          title: "¿Desea Agregar algún Producto?",
          text: "",
          icon: "warning",
          buttons: {
            cancel: "Concluir",
            default: "Ir al Carrito",
          },
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            window.location.href = "categoriasMarcas.html";
          } else {
            //window.location.href = "accion.html";
            if (
              ($.trim(sucursalElegida).length > 0) &
              ($.trim(nombreCliente).length > 0) &
              ($.trim(idCliente).length > 0)
            ) {
              $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function () {
                  $("#formProcesarSolicitud").val("Procesando Solicitud...");
                  $("#formProcesarSolicitud").attr("disabled", true);
                },
                success: function (data) {
                  if (data == "failed") {
                    swal(
                      "Algo Salio Mal...",
                      "Error al procesar Solicitud",
                      "error"
                    );
                  } else if (data == "success") {
                    localStorage.removeItem("observacionesSolicitud");
                    localStorage.removeItem("observacionesProductos");
                    localStorage.removeItem("formaPago");
                    localStorage.ProductosAdd = "[]";
                    window.location.href = "finSolicitud.html";
                  } else if (data == "ganador") {
                    localStorage.removeItem("observacionesSolicitud");
                    localStorage.removeItem("observacionesProductos");
                    localStorage.removeItem("formaPago");
                    localStorage.ProductosAdd = "[]";
                    window.location.href = "ganadorRifa.html";
                  }
                },
              });
            } else {
              swal("Alto!", "Llenar los campos obligatorios.*", "info");
            }
          }
        });
      } else if (listaProductos == "[]" && ob1 == false && ob2 == true) {
        //swal("No se puede Procesar", "No Se Ha Seleccionado Ningún Producto", "warning");

        swal({
          title: "No se Puede Procesar",
          text: "No Se Ha Seleccionado Ningún Producto!",
          icon: "warning",
          buttons: {
            cancel: "Ok",
            default: "Elegir Productos",
          },
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            window.location.href = "categoriasMarcas.html";
          } else {
          }
        });
      } else if (listaProductos != "[]" && ob1 == false && ob2 == true) {
        if (
          ($.trim(sucursalElegida).length > 0) &
          ($.trim(nombreCliente).length > 0) &
          ($.trim(idCliente).length > 0)
        ) {
          $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function () {
              $("#formProcesarSolicitud").val("Procesando Solicitud...");
              $("#formProcesarSolicitud").attr("disabled", true);
            },
            success: function (data) {
              if (data == "failed") {
                swal(
                  "Algo Salio Mal...",
                  "Error al procesar Solicitud",
                  "error"
                );
              } else if (data == "success") {
                localStorage.removeItem("observacionesSolicitud");
                localStorage.removeItem("observacionesProductos");
                localStorage.ProductosAdd = "[]";
                window.location.href = "finSolicitud.html";
              } else if (data == "ganador") {
                localStorage.removeItem("observacionesSolicitud");
                localStorage.removeItem("observacionesProductos");
                localStorage.ProductosAdd = "[]";
                window.location.href = "ganadorRifa.html";
              }
            },
          });
        } else {
          swal("Alto!", "Llenar los campos obligatorios.*", "info");
        }
      }
    }

    return false;
  });
  //Listar mis solicitudes
  $("#btnEstatus").click(function () {
    var idCliente = localStorage.idCliente;
    var dataString = "idCliente=" + idCliente + "&listarSolicitudes=";
    if ($.trim(idCliente).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          $("#btnEstatus").val("Verificando...");
        },
        success: function (data) {
          if (data != "failed") {
            localStorage.arregloSolicitudes = data;
            window.location.href = "estatus.html";
          } else if (data == "failed") {
            //window.location.href = "estatus.html";
            //alert("No tiene solicitudes realizadas.");
            swal("Upss", "No tiene solicitudes realizadas.", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });
  //Listar las promociones
  $("#btnPromociones").click(function () {
    var idCliente = localStorage.idCliente;
    var dataString = "idCliente=" + idCliente + "&listarPromociones=";
    if ($.trim(idCliente).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          $("#btnPromociones").val("Buscando...");
        },
        success: function (data) {
          if (data != "failed") {
            localStorage.arregloPromociones = data;
            window.location.href = "promociones.html";
          } else if (data == "failed") {
            //window.location.href = "estatus.html";
            swal("Lo Sentimos", "No hay promociones por ahora.", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });
  //VER STATUS
  $(".tablaLista").on("click", ".verStatus", function () {
    var idSolicitud = $(this).attr("idSolicitud");
    var dataString = "idSolicitud=" + idSolicitud + "&verLista=";
    if ($.trim(idSolicitud).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {},
        success: function (data) {
          if (data != "failed") {
            var json = data;
            for (var clave in json) {
              localStorage.horaSolicitud = JSON.parse(json).horaSolicitud;
              localStorage.motoEnCamino = JSON.parse(json).motoEnCamino;
              localStorage.motoEnCaminoFecha =
                JSON.parse(json).motoEnCaminoFecha;
              localStorage.enProceso = JSON.parse(json).enProceso;
              localStorage.enProcesoFecha = JSON.parse(json).enProcesoFecha;
              localStorage.motoEnCaminoRegreso =
                JSON.parse(json).motoEnCaminoRegreso;
              localStorage.regresoFecha = JSON.parse(json).regresoFecha;
              localStorage.concluido = JSON.parse(json).concluido;
              localStorage.horaConcluido = JSON.parse(json).horaConcluido;
            }
            window.location.href = "estatusSolicitudes.html";
          } else if (data == "failed") {
            //window.location.href = "estatus.html";
            swal("Upss", "No se pueden obtener los datos.", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });

  $(".tablaLista").on("click", ".btnrequiereFactura", function () {
    var idSolicitud = $(this).attr("idSolicitud");
    var idCliente = localStorage.idCliente;
    var dataString = "idCliente=" + idCliente + "&validarExiste=";
    if ($.trim(idCliente).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {},
        success: function (data) {
          if (data != "failed") {
            localStorage.validarExistencia = data;
            var json = localStorage.validarExistencia;
            var types = JSON.parse(json);

            for (x = 0; x < types.length; x++) {
              var existe = types[x].existe;

              if (existe == 1) {
                //console.log("Esta Vivo XD...");

                var dataString =
                  "idSolicitud=" + idSolicitud + "&actualizarRequiereFactura=";
                if ($.trim(idSolicitud).length > 0) {
                  $.ajax({
                    type: "POST",
                    url: url,
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function () {},
                    success: function (data) {
                      if (data != "failed") {
                        var json = data;
                        swal("", "se ha solicitado la factura", "info");
                        //window.location.href = "estatusSolicitudes.html";

                        var idCliente = localStorage.idCliente;
                        var dataString =
                          "idCliente=" + idCliente + "&listarSolicitudes=";
                        if ($.trim(idCliente).length > 0) {
                          $.ajax({
                            type: "POST",
                            url: url,
                            data: dataString,
                            crossDomain: true,
                            cache: false,
                            beforeSend: function () {},
                            success: function (data) {
                              if (data != "failed") {
                                localStorage.arregloSolicitudes = data;
                                window.location.href = "estatus.html";
                              } else if (data == "failed") {
                                //window.location.href = "estatus.html";
                                //alert("No tiene solicitudes realizadas.");
                                //swal("Upss", "No tiene solicitudes realizadas.", "info");
                              }
                            },
                          });
                        } else {
                          swal("Ha Ocurrido un Error", "", "error");
                        }
                        return false;
                      } else if (data == "failed") {
                        //window.location.href = "estatus.html";
                        swal("Upss", "No se pueden obtener los datos.", "info");
                      }
                    },
                  });
                } else {
                  swal("Ha Ocurrido un Error", "", "error");
                }
                return false;
              } else {
                swal("Error", "no exixten los datos para facturar", "error");
              }
            }
          } else if (data == "failed") {
            //window.location.href = "estatus.html";
            swal("Upss", "No se pueden obtener los datos.", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });
  $(".tablaLista").on("click", ".btnrequiereFacturaRed", function () {
    var idSolicitudRed = $(this).attr("idSolicitudRed");
    var dataString =
      "idSolicitudRed=" + idSolicitudRed + "&actualizarRequiereFacturaRed=";
    if ($.trim(idSolicitudRed).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {},
        success: function (data) {
          if (data != "failed") {
            var json = data;
            swal("", "se ha cancelado la facturación", "info");
            //window.location.href = "estatusSolicitudes.html";
            var idCliente = localStorage.idCliente;
            var dataString = "idCliente=" + idCliente + "&listarSolicitudes=";
            if ($.trim(idCliente).length > 0) {
              $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function () {},
                success: function (data) {
                  if (data != "failed") {
                    localStorage.arregloSolicitudes = data;
                    window.location.href = "estatus.html";
                  } else if (data == "failed") {
                    //window.location.href = "estatus.html";
                    //alert("No tiene solicitudes realizadas.");
                    //swal("Upss", "No tiene solicitudes realizadas.", "info");
                  }
                },
              });
            } else {
              swal("Ha Ocurrido un Error", "", "error");
            }
            return false;
          } else if (data == "failed") {
            //window.location.href = "estatus.html";
            swal("Upss", "No se pueden obtener los datos.", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });
  //VER ARCHIVOS DE PEDIDO
  $(".tablaLista").on("click", ".verReciboProductos", function () {
    var idSolicitud = $(this).attr("idSolicitud");
    var dataString = "idSolicitud=" + idSolicitud + "&verReciboProductos=";
    if ($.trim(idSolicitud).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {},
        success: function (data) {
          if (data != "failed") {
            var json = data;
            for (var clave in json) {
              var local = (localStorage.rutaSolicitud =
                JSON.parse(json).rutaSolicitud);
            }
            var json = localStorage.rutaSolicitud;
            window.open(
              `https://sanfranciscodekkerlab.com/matriz/` + json + ``,
              "_system"
            );
          } else if (data == "failed") {
            //window.location.href = "estatus.html";
            swal("Upss", "No se pueden obtener los datos.", "error");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });
  //LISTAR ESTADOS
  $.ajax({
    type: "POST",
    url: url,
    data: {
      estados: "Mexico",
    },
  }).done(function (data) {
    $("#estado").html(data);
  });
  // Obtener municipios
  $("#estado").change(function () {
    var estado = $("#estado option:selected").val();
    $.ajax({
      type: "POST",
      url: url,
      data: {
        municipios: estado,
      },
    }).done(function (data) {
      $("#municipio").html(data);
    });
  });
  //LISTAS ESTADOS
  /**
   * MOSTRAR LO MAS VENDIDO
   */
  $("#btnProductos").click(function () {
    var idCliente = localStorage.idCliente;
    var dataString = "idCliente=" + idCliente + "&listarMasVendido=";
    //var dataString = "&listarMarcas=";
    if ($.trim(idCliente).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          $("#btnProductos").val("Verificando...");
        },
        success: function (data) {
          if (data != "failed") {
            //localStorage.arregloMarcas = data;
            localStorage.arregloMasVendido = data;
            window.location.href = "categoriasMarcas.html";
          } else if (data == "failed") {
            //window.location.href = "estatus.html";
            swal("No hay Conexión...", "", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });
  /*------------MOSTAR LO MAS VENDIDO*/
  /**
   * MOSTRAR LO MAS BUSCADO
   */
  $("#btnProductos").click(function () {
    var idCliente = localStorage.idCliente;
    var dataString = "idCliente=" + idCliente + "&listarMasBuscado=";
    //var dataString = "&listarMarcas=";
    if ($.trim(idCliente).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          $("#btnProductos").val("Verificando...");
        },
        success: function (data) {
          if (data != "failed") {
            //localStorage.arregloMarcas = data;
            localStorage.arregloMasBuscado = data;
            //window.location.href = "categoriasMarcas.html";
            //alert("Productos Bus; ", idCliente);
          } else if (data == "failed") {
            //window.location.href = "estatus.html";
            //swal("No hay Conexión...", "", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });
  /*------------MOSTAR LO MAS BUSCADO*/
  /*==========================
    LISTAR SUBCATEGORIAS MARCAS
    ===========================*/
  $("#contenedor").on("click", ".btnVerSubcategoria", function () {
    var idMarca = $(this).attr("idCategoria");
    var dataString = "idMarca=" + idMarca + "&listarSubcategoria=";
    if ($.trim(idMarca).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          // $(".btnVerSubcategoria").val('Verificando...');
        },
        success: function (data) {
          if (data != "failed") {
            localStorage.arregloSubcategoriaMarca = data;
            window.location.href = "subcategoriaMarca.html";
          } else if (data == "failed") {
            swal("No hay Conexión...", "", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });
  /*==========================
    LISTAR SUBCATEGORIAS MARCAS
    ===========================*/
  /*==========================
    LISTAR PRODUCTOS
    ===========================*/
  $("#contenedor").on("click", ".btnVerProductos", function () {
    var idSubcategoria = $(this).attr("idSubCategorias");
    var nombreSubcategoria = $(this).attr("nombreSubcategoria");
    localStorage.nombreSubcategoria = nombreSubcategoria;
    var dataString = "idSubcategoria=" + idSubcategoria + "&listarProductos=";
    if ($.trim(idSubcategoria).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {},
        success: function (data) {
          if (data != "failed") {
            localStorage.arregloProductos = data;
            window.location.href = "subcategoriaProductos.html";
          } else if (data == "failed") {
            swal("No hay Conexión...", "", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });
  $("#tipo").click(function () {
    var idDesglose = $("#tipo").val();
    var empresa = localStorage.sucursal;
    if (
      empresa == "San Manuel" ||
      empresa == "Reforma" ||
      empresa == "Santiago"
    ) {
      var marca = "flex";
    } else if (empresa == "Capu") {
      var marca = "excelo";
    } else if (empresa == "Las Torres") {
      var marca = "";
    } else {
      var marca = "";
    }

    var dataString =
      "idDesglose=" +
      idDesglose +
      "&marca=" +
      marca +
      "&listarProductosDesglose=";
    if ($.trim(idDesglose).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {},
        success: function (data) {
          if (data != "failed") {
            localStorage.arregloProductosDesglose = data;
            document.getElementById("desglose").innerHTML = "";
            var json2 = localStorage.arregloProductosDesglose;
            var typesDesglose = JSON.parse(json2);

            for (x = 0; x < typesDesglose.length; x++) {
              var div3 =
                `<option value="` +
                typesDesglose[x].id +
                `">` +
                typesDesglose[x].descripcion +
                `</option>`;
              $("#desglose").append(div3);
            }
          } else if (data == "failed") {
            swal("No hay Conexión", "", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });
  $("#desglose").click(function () {
    var idSubcategoriaDesglose = $("#desglose").val();
    var dataString =
      "idSubcategoriaDesglose=" +
      idSubcategoriaDesglose +
      "&listarProductosSubDesglose=";
    if ($.trim(idSubcategoriaDesglose).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {},
        success: function (data) {
          if (data != "failed") {
            localStorage.arregloProductosSubDesglose = data;
            document.getElementById("subdesglose").innerHTML = "";
            var json2 = localStorage.arregloProductosSubDesglose;
            var typesDesglose = JSON.parse(json2);

            for (x = 0; x < typesDesglose.length; x++) {
              var div4 =
                `<option value="` +
                typesDesglose[x].id +
                `">` +
                typesDesglose[x].codigo +
                ` | ` +
                typesDesglose[x].descripcion +
                `</option>`;
              $("#subdesglose").append(div4);
            }
          } else if (data == "failed") {
            swal("No hay Conexión...", "", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });
  $("#subdesglose").click(function () {
    var idProductoDesglose = $("#subdesglose").val();
    localStorage.idProducto = idProductoDesglose;
    var dataString =
      "idProductoDesglose=" + idProductoDesglose + "&mostrarProductoFinal=";
    if ($.trim(idProductoDesglose).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {},
        success: function (data) {
          if (data != "failed") {
            localStorage.arregloDatosProducto = data;

            var json3 = localStorage.arregloDatosProducto;
            var typeDatosProducto = JSON.parse(json3);

            for (x = 0; x < typeDatosProducto.length; x++) {
              if (typeDatosProducto[x].unidadMedida != "PZ") {
                localStorage.codigoProducto = typeDatosProducto[x].codigo;
                var precioCubeta = typeDatosProducto[x].cubeta;
                var precioGalon = typeDatosProducto[x].galon;
                var precioLitro = typeDatosProducto[x].litro;
                var precioMedio = typeDatosProducto[x].medio;
                var precioCuarto = typeDatosProducto[x].cuart;
                var precioOctavo = typeDatosProducto[x].octav;

                var miObjeto = [
                  { precio: precioCubeta, valor: "CUBETA" },
                  { precio: precioGalon, valor: "GALÓN" },
                  { precio: precioLitro, valor: "LITRO" },
                  { precio: precioMedio, valor: "500 ML" },
                  { precio: precioCuarto, valor: "250 ML" },
                  { precio: precioOctavo, valor: "125ML" },
                ];
              } else {
                localStorage.codigoProducto = typeDatosProducto[x].codigo;
                var precioPieza = typeDatosProducto[x].cubeta;
                var miObjeto = [{ precio: precioPieza, valor: "PZ" }];
              }

              var array = JSON.stringify(miObjeto);

              document.getElementById("unidad").innerHTML = "";
              localStorage.preciosProductos = array;
            }
            var precios = localStorage.preciosProductos;
            var preciosP = JSON.parse(precios);
            var div6 = `<option value="">ELEGIR</option>`;
            $("#unidad").append(div6);
            for (var i = 0; i < preciosP.length; i++) {
              var div5 =
                `<option value="` +
                preciosP[i].precio +
                `">` +
                preciosP[i].valor +
                `</option>`;
              $("#unidad").append(div5);
            }
          } else if (data == "failed") {
            swal("No hay Conexión", "", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });
  $("#unidad").change(function () {
    function dosDecimales(n) {
      let t = n.toString();
      let regex = /(\d*.\d{0,2})/;
      return t.match(regex)[0];
    }
    var select = document.getElementById("unidad");
    value = select.value;
    localStorage.precioElegido = value;
    text = select.options[select.selectedIndex].innerText;
    localStorage.unidadElegida = text;

    $("#precio").val(dosDecimales(value));
  });

  /*==========================
    LISTAR USO DE CFDI
    ===========================*/
  $("#datosFacturacion").click(function () {
    var idCliente = localStorage.idCliente;
    var dataString = "idCliente=" + idCliente + "&validarExiste=";
    if ($.trim(idCliente).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {},
        success: function (data) {
          if (data != "failed") {
            localStorage.validarExistencia = data;
            var json = localStorage.validarExistencia;
            var types = JSON.parse(json);

            for (x = 0; x < types.length; x++) {
              var existe = types[x].existe;

              if (existe == 1) {
                var dataString = "idCliente=" + idCliente + "&listarUsoCfdi=";
                if ($.trim(idCliente).length > 0) {
                  $.ajax({
                    type: "POST",
                    url: url,
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function () {},
                    success: function (data) {
                      if (data != "failed") {
                        localStorage.arregloCfdi = data;

                        //console.log(localStorage.arregloCfdi);
                        var dataString =
                          "idCliente=" + idCliente + "&listarDatosFacturacion=";
                        if ($.trim(idCliente).length > 0) {
                          $.ajax({
                            type: "POST",
                            url: url,
                            data: dataString,
                            crossDomain: true,
                            cache: false,
                            beforeSend: function () {},
                            success: function (data) {
                              if (data != "failed") {
                                localStorage.arregloDatosFacturacion = data;

                                console.log(
                                  localStorage.arregloDatosFacturacion
                                );
                                window.location.href = "datosFacturacion.html";
                              } else if (data == "failed") {
                                swal("No hay Conexión...", "", "info");
                              }
                            },
                          });
                        } else {
                          swal("Ha Ocurrido un Error", "", "error");
                        }
                        return false;
                      } else if (data == "failed") {
                        swal("No hay Conexión...", "", "info");
                      }
                    },
                  });
                } else {
                  swal("Ha Ocurrido un Error", "", "error");
                }
                return false;
              } else {
                var dataString = "idCliente=" + idCliente + "&listarUsoCfdi=";
                if ($.trim(idCliente).length > 0) {
                  $.ajax({
                    type: "POST",
                    url: url,
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function () {},
                    success: function (data) {
                      if (data != "failed") {
                        localStorage.arregloCfdi = data;

                        //console.log(localStorage.arregloCfdi);
                        window.location.href = "datosFacturacion.html";
                      } else if (data == "failed") {
                        swal("No hay Conexión...", "", "info");
                      }
                    },
                  });
                } else {
                  swal("Ha Ocurrido un Error", "", "error");
                }
                return false;
              }
            }
          } else if (data == "failed") {
            //window.location.href = "estatus.html";
            swal("No hay Conexión...", "", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
    /*var idCliente = localStorage.idCliente;
     */
  });
  /*======================
    AGREGAR A CARRITO PRODUCTOS SOLICITADOS
    ========================*/
  $("#contenedor2").on("click", ".btnAgregarP", function () {
    var idCliente = localStorage.idCliente;
    var idProducto = localStorage.idProducto;
    var precioProducto = localStorage.precioElegido;
    var codigoProducto = localStorage.codigoProducto;
    var unidadMedida = localStorage.unidadElegida;
    var cantidad = $("#number").val();
    if (cantidad != 0) {
      function Producto(
        idCliente,
        idProducto,
        codigoProducto,
        precioProducto,
        unidadMedida,
        cantidad
      ) {
        this.idCliente = idCliente;
        this.idProducto = idProducto;
        this.codigoProducto = codigoProducto;
        this.precioProducto = precioProducto;
        this.unidadMedida = unidadMedida;
        this.cantidad = cantidad;
      }
      nuevoProducto = new Producto(
        idCliente,
        idProducto,
        codigoProducto,
        precioProducto,
        unidadMedida,
        cantidad
      );
      agregar();
      swal("Exito!", "Producto agregado al Carrito", "success");
    } else {
      swal("", "Por Favor Ingresa una Cantidad", "warning");
    }
  });
  $("#contenedors").on("click", ".btnAgregarProd", function () {
    var idCliente = localStorage.idCliente;
    var idProducto = $(this).attr("idProducto");
    var descripcion = $(this).attr("descripcion");
    var precioProducto = $(this).attr("precioProducto");
    var codigoProducto = $(this).attr("codigoProducto");
    var unidadMedida = $(this).attr("unidadMedida");
    var foto = $(this).attr("foto");
    var precioDescuento = $(this).attr("precioDescuento");
    var descuento = $(this).attr("descuento");
    var parent = $(this).parent().parent().parent();
    var cantidad = parent.find('input[name="number[]"]').val();
    //console.log(unidadMedida);
    var dataString = "idProducto=" + idProducto + "&actualizarBuscado=";
    if (cantidad != 0) {
      function Producto(
        idCliente,
        idProducto,
        descripcion,
        codigoProducto,
        precioProducto,
        unidadMedida,
        foto,
        precioDescuento,
        descuento,
        cantidad
      ) {
        this.idCliente = idCliente;
        this.idProducto = idProducto;
        this.descripcion = descripcion;
        this.codigoProducto = codigoProducto;
        this.precioProducto = precioProducto;
        this.unidadMedida = unidadMedida;
        this.foto = foto;
        this.precioDescuento = precioDescuento;
        this.descuento = descuento;
        this.cantidad = cantidad;
      }
      var arregloProductos = localStorage.ProductosAdd.split(",");
      if (arregloProductos == "[]") {
        nuevoProducto = new Producto(
          idCliente,
          idProducto,
          descripcion,
          codigoProducto,
          precioProducto,
          unidadMedida,
          foto,
          precioDescuento,
          descuento,
          cantidad
        );
        agregar();
        swal("Exito!", "Producto agregado al Carrito", "success");

        if ($.trim(idProducto).length > 0) {
          $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function () {},
            success: function (data) {},
          });
        } else {
        }
      } else {
        var types = JSON.parse(arregloProductos);
        for (var i = 0; i < types.length; i++) {
          var id = types[i].idProducto;
          if (id === idProducto) {
            var cantidadInicial = types[i].cantidad * 1;
            var cantidadProducto = cantidadInicial + parseInt(cantidad);

            var puntero = true;

            delete types[i].cantidad;
            localStorage.ProductosAdd = JSON.stringify(types);

            types[i].cantidad = cantidadProducto;
            localStorage.ProductosAdd = JSON.stringify(types);
            swal("Exito!", "Producto agregado al Carrito", "success");

            if ($.trim(idProducto).length > 0) {
              $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function () {},
                success: function (data) {},
              });
            } else {
            }
          } else {
          }
        }

        if (puntero != true) {
          nuevoProducto = new Producto(
            idCliente,
            idProducto,
            descripcion,
            codigoProducto,
            precioProducto,
            unidadMedida,
            foto,
            precioDescuento,
            descuento,
            cantidad
          );
          agregar();
          swal("Exito!", "Producto agregado al Carrito", "success");

          if ($.trim(idProducto).length > 0) {
            $.ajax({
              type: "POST",
              url: url,
              data: dataString,
              crossDomain: true,
              cache: false,
              beforeSend: function () {},
              success: function (data) {},
            });
          } else {
          }
        }
      }
    } else {
      swal("", "Por Favor Ingresa una Cantidad", "warning");
    }
  });
  /**
   * FUNCNCION DE AGREGAR PRODUCTOS MAS VENDIDOS AL CARRITO
   *
   */

  $("#tableMasVendidos").on("click", ".btnAgregarPrMasV", function () {
    var idCliente = localStorage.idCliente;
    var idProducto = $(this).attr("idProducto");
    var descripcion = $(this).attr("descripcion");
    var precioProducto = $(this).attr("precioProducto");
    var codigoProducto = $(this).attr("codigoProducto");
    var unidadMedida = $(this).attr("unidadMedida");
    var foto = $(this).attr("foto");
    var precioDescuento = $(this).attr("precioDescuento");
    var descuento = $(this).attr("descuento");
    var parent = $(this).parent().parent().parent();
    var cantidad = parent.find('input[name="cantidadN[]"]').val();
    console.log(descuento);
    var dataString = "idProducto=" + idProducto + "&actualizarBuscado=";

    if (cantidad != 0) {
      function Producto(
        idCliente,
        idProducto,
        descripcion,
        codigoProducto,
        precioProducto,
        unidadMedida,
        foto,
        precioDescuento,
        descuento,
        cantidad
      ) {
        this.idCliente = idCliente;
        this.idProducto = idProducto;
        this.descripcion = descripcion;
        this.codigoProducto = codigoProducto;
        this.precioProducto = precioProducto;
        this.unidadMedida = unidadMedida;
        this.foto = foto;
        this.precioDescuento = precioDescuento;
        this.descuento = descuento;
        this.cantidad = cantidad;
      }
      var arregloProductos = localStorage.ProductosAdd.split(",");
      if (arregloProductos == "[]") {
        nuevoProducto = new Producto(
          idCliente,
          idProducto,
          descripcion,
          codigoProducto,
          precioProducto,
          unidadMedida,
          foto,
          precioDescuento,
          descuento,
          cantidad
        );
        agregar();
        swal("Exito!", "Producto agregado al Carrito", "success");

        if ($.trim(idProducto).length > 0) {
          $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function () {},
            success: function (data) {},
          });
        } else {
        }
      } else {
        var types = JSON.parse(arregloProductos);
        for (var i = 0; i < types.length; i++) {
          var id = types[i].idProducto;
          if (id === idProducto) {
            var cantidadInicial = types[i].cantidad * 1;
            var cantidadProducto = cantidadInicial + parseInt(cantidad);

            var puntero = true;

            delete types[i].cantidad;
            localStorage.ProductosAdd = JSON.stringify(types);

            types[i].cantidad = cantidadProducto;
            localStorage.ProductosAdd = JSON.stringify(types);
            swal("Exito!", "Producto agregado al Carrito", "success");
            if ($.trim(idProducto).length > 0) {
              $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function () {},
                success: function (data) {},
              });
            } else {
            }
          } else {
          }
        }

        if (puntero != true) {
          nuevoProducto = new Producto(
            idCliente,
            idProducto,
            descripcion,
            codigoProducto,
            precioProducto,
            unidadMedida,
            foto,
            precioDescuento,
            descuento,
            cantidad
          );
          agregar();
          swal("Exito!", "Producto agregado al Carrito", "success");

          if ($.trim(idProducto).length > 0) {
            $.ajax({
              type: "POST",
              url: url,
              data: dataString,
              crossDomain: true,
              cache: false,
              beforeSend: function () {},
              success: function (data) {},
            });
          } else {
          }
        }
      }
    } else {
      swal("", "Por Favor Ingresa una Cantidad", "warning");
    }
  });

  $("#divTableProductos").on("click", ".btnAgregaraCarro", function () {
    var idCliente = localStorage.idCliente;
    var idProducto = $(this).attr("idProducto");
    var descripcion = $(this).attr("descripcion");
    var precioProducto = $(this).attr("precioProducto");
    var codigoProducto = $(this).attr("codigoProducto");
    var unidadMedida = $(this).attr("unidadMedida");
    var foto = $(this).attr("foto");
    var precioDescuento = $(this).attr("precioDescuento");
    var descuento = $(this).attr("descuento");
    var parent = $(this).parent().parent().parent();
    var cantidad = parent.find('input[name="cantidadProd[]"]').val();
    var dataString = "idProducto=" + idProducto + "&actualizarBuscado=";
    if (cantidad != 0) {
      function Producto(
        idCliente,
        idProducto,
        descripcion,
        codigoProducto,
        precioProducto,
        unidadMedida,
        foto,
        precioDescuento,
        descuento,
        cantidad
      ) {
        this.idCliente = idCliente;
        this.idProducto = idProducto;
        this.descripcion = descripcion;
        this.codigoProducto = codigoProducto;
        this.precioProducto = precioProducto;
        this.unidadMedida = unidadMedida;
        this.foto = foto;
        this.precioDescuento = precioDescuento;
        this.descuento = descuento;
        this.cantidad = cantidad;
      }
      var arregloProductos = localStorage.ProductosAdd.split(",");
      if (arregloProductos == "[]") {
        nuevoProducto = new Producto(
          idCliente,
          idProducto,
          descripcion,
          codigoProducto,
          precioProducto,
          unidadMedida,
          foto,
          precioDescuento,
          descuento,
          cantidad
        );
        agregar();
        swal("Exito!", "Producto agregado al Carrito", "success");

        if ($.trim(idProducto).length > 0) {
          $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function () {},
            success: function (data) {},
          });
        } else {
        }
      } else {
        var types = JSON.parse(arregloProductos);
        for (var i = 0; i < types.length; i++) {
          var id = types[i].idProducto;
          if (id === idProducto) {
            var cantidadInicial = types[i].cantidad * 1;
            var cantidadProducto = cantidadInicial + parseInt(cantidad);

            var puntero = true;

            delete types[i].cantidad;
            localStorage.ProductosAdd = JSON.stringify(types);

            types[i].cantidad = cantidadProducto;
            localStorage.ProductosAdd = JSON.stringify(types);
            swal("Exito!", "Producto agregado al Carrito", "success");

            if ($.trim(idProducto).length > 0) {
              $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function () {},
                success: function (data) {},
              });
            } else {
            }
          } else {
          }
        }

        if (puntero != true) {
          nuevoProducto = new Producto(
            idCliente,
            idProducto,
            descripcion,
            codigoProducto,
            precioProducto,
            unidadMedida,
            foto,
            precioDescuento,
            descuento,
            cantidad
          );
          agregar();
          swal("Exito!", "Producto agregado al Carrito", "success");

          if ($.trim(idProducto).length > 0) {
            $.ajax({
              type: "POST",
              url: url,
              data: dataString,
              crossDomain: true,
              cache: false,
              beforeSend: function () {},
              success: function (data) {},
            });
          } else {
          }
        }
      }
    } else {
      swal("", "Por Favor Ingresa una Cantidad", "warning");
    }
  });
  /************************************************
   *                                              *
   * AGREGAR PRODUCTOS DESDE LO MAS BUSCADO       *
   *                                              *
   ***********************************************/
  $("#divTableMasBuscado").on("click", ".btnAgregaraCarroBus", function () {
    var idCliente = localStorage.idCliente;
    var idProducto = $(this).attr("idProducto");
    var descripcion = $(this).attr("descripcion");
    var precioProducto = $(this).attr("precioProducto");
    var codigoProducto = $(this).attr("codigoProducto");
    var unidadMedida = $(this).attr("unidadMedida");
    var foto = $(this).attr("foto");
    var precioDescuento = $(this).attr("precioDescuento");
    var descuento = $(this).attr("descuento");
    var parent = $(this).parent().parent().parent();
    var cantidad = parent.find('input[name="cantidadProd[]"]').val();
    if (cantidad != 0) {
      function Producto(
        idCliente,
        idProducto,
        descripcion,
        codigoProducto,
        precioProducto,
        unidadMedida,
        foto,
        precioDescuento,
        descuento,
        cantidad
      ) {
        this.idCliente = idCliente;
        this.idProducto = idProducto;
        this.descripcion = descripcion;
        this.codigoProducto = codigoProducto;
        this.precioProducto = precioProducto;
        this.unidadMedida = unidadMedida;
        this.foto = foto;
        this.precioDescuento = precioDescuento;
        this.descuento = descuento;
        this.cantidad = cantidad;
      }
      var arregloProductos = localStorage.ProductosAdd.split(",");
      if (arregloProductos == "[]") {
        nuevoProducto = new Producto(
          idCliente,
          idProducto,
          descripcion,
          codigoProducto,
          precioProducto,
          unidadMedida,
          foto,
          precioDescuento,
          descuento,
          cantidad
        );
        agregar();
        swal("Exito!", "Producto agregado al Carrito", "success");
      } else {
        var types = JSON.parse(arregloProductos);
        for (var i = 0; i < types.length; i++) {
          var id = types[i].idProducto;
          if (id === idProducto) {
            var cantidadInicial = types[i].cantidad * 1;
            var cantidadProducto = cantidadInicial + parseInt(cantidad);

            var puntero = true;

            delete types[i].cantidad;
            localStorage.ProductosAdd = JSON.stringify(types);

            types[i].cantidad = cantidadProducto;
            localStorage.ProductosAdd = JSON.stringify(types);
            swal("Exito!", "Producto agregado al Carrito", "success");
          } else {
          }
        }

        if (puntero != true) {
          nuevoProducto = new Producto(
            idCliente,
            idProducto,
            descripcion,
            codigoProducto,
            precioProducto,
            unidadMedida,
            foto,
            precioDescuento,
            descuento,
            cantidad
          );
          agregar();
          swal("Exito!", "Producto agregado al Carrito", "success");
        }
      }
    } else {
      swal("", "Por Favor Ingresa una Cantidad", "warning");
    }
  });
  /*************************BUSCADOR DE PRODUCTOS*************/
  $("#tableResultadosBusqueda").on("click", ".btnAgregarPrMasV", function () {
    var idCliente = localStorage.idCliente;
    var idProducto = $(this).attr("idProducto");
    var descripcion = $(this).attr("descripcion");
    var precioProducto = $(this).attr("precioProducto");
    var codigoProducto = $(this).attr("codigoProducto");
    var unidadMedida = $(this).attr("unidadMedida");
    var foto = $(this).attr("foto");
    var precioDescuento = $(this).attr("precioDescuento");
    var descuento = $(this).attr("descuento");
    var parent = $(this).parent().parent().parent();
    var cantidad = parent.find('input[name="cantidadB[]"]').val();
    var dataString = "idProducto=" + idProducto + "&actualizarBuscado=";
    if (cantidad != 0) {
      function Producto(
        idCliente,
        idProducto,
        descripcion,
        codigoProducto,
        precioProducto,
        unidadMedida,
        foto,
        precioDescuento,
        descuento,
        cantidad
      ) {
        this.idCliente = idCliente;
        this.idProducto = idProducto;
        this.descripcion = descripcion;
        this.codigoProducto = codigoProducto;
        this.precioProducto = precioProducto;
        this.unidadMedida = unidadMedida;
        this.foto = foto;
        this.precioDescuento = precioDescuento;
        this.descuento = descuento;
        this.cantidad = cantidad;
      }
      var arregloProductos = localStorage.ProductosAdd.split(",");
      if (arregloProductos == "[]") {
        nuevoProducto = new Producto(
          idCliente,
          idProducto,
          descripcion,
          codigoProducto,
          precioProducto,
          unidadMedida,
          foto,
          precioDescuento,
          descuento,
          cantidad
        );
        agregar();
        swal("Exito!", "Producto agregado al Carrito", "success");

        if ($.trim(idProducto).length > 0) {
          $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function () {},
            success: function (data) {},
          });
        } else {
        }
      } else {
        var types = JSON.parse(arregloProductos);
        for (var i = 0; i < types.length; i++) {
          var id = types[i].idProducto;
          if (id === idProducto) {
            var cantidadInicial = types[i].cantidad * 1;
            var cantidadProducto = cantidadInicial + parseInt(cantidad);

            var puntero = true;

            delete types[i].cantidad;
            localStorage.ProductosAdd = JSON.stringify(types);

            types[i].cantidad = cantidadProducto;
            localStorage.ProductosAdd = JSON.stringify(types);
            swal("Exito!", "Producto agregado al Carrito", "success");

            if ($.trim(idProducto).length > 0) {
              $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function () {},
                success: function (data) {},
              });
            } else {
            }
          } else {
          }
        }

        if (puntero != true) {
          nuevoProducto = new Producto(
            idCliente,
            idProducto,
            descripcion,
            codigoProducto,
            precioProducto,
            unidadMedida,
            foto,
            precioDescuento,
            descuento,
            cantidad
          );
          agregar();
          swal("Exito!", "Producto agregado al Carrito", "success");

          if ($.trim(idProducto).length > 0) {
            $.ajax({
              type: "POST",
              url: url,
              data: dataString,
              crossDomain: true,
              cache: false,
              beforeSend: function () {},
              success: function (data) {},
            });
          } else {
          }
        }
      }
    } else {
      swal("", "Por Favor Ingresa una Cantidad", "warning");
    }
  });
  /*************************BUSCADOR DE PRODUCTOS*************/
  /*****************BUSCADOR DE PRODUCTOS***************/
  $(document).ready(function () {
    $("#formSearchProductos").keypress(function (e) {
      if (e.which == 13) {
        return false;
      }
    });

    /***********BUSCADOR***************/
    var busqueda = localStorage.getItem("busqueda");
    if (busqueda == null) {
      document.getElementById("loader").style.display = "";
    } else {
      var busqueda = localStorage.getItem("busqueda");
      if (document.getElementById("loader") == null) {
      } else {
        document.getElementById("loader").style.display = "none";
      }

      var dataString = "search=" + busqueda + "&listarResultadosBusqueda=";
      if ($.trim(busqueda).length > 0) {
        $.ajax({
          type: "POST",
          url: url,
          data: dataString,
          crossDomain: true,
          cache: false,
          beforeSend: function () {},
          success: function (data) {
            if (data != "failed") {
              if (document.getElementById("loader") == null) {
              } else {
                document.getElementById("loader").style.display = "none";
              }

              var json = data;
              var types = JSON.parse(json);
              //alert(types.length);
              for (x = 0; x < types.length; x++) {
                var precio = types[x].precio * 1;
                var descuento = types[x].descuento * 1;
                var precioF = (precio * descuento) / 100;
                //console.log(precioF);
                if (types[x].favorito == 1) {
                  if (descuento != 0) {
                    var precioDescuento = precio - precioF;
                    var div =
                      `<div class="col-lg-12 col-md-12 col-sm-12" id="contBusqueda">
                                            <div id="svgOff" >
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                <!--- Etiqueta Oferta de Promoción -->
                                                    <g>
                                                      <!--- Etiqueta -->
                                                      <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                      <!--- Texto -->
                                                      <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                      precio.toFixed(2) +
                      `</text>  
                                                    </g>
                                                <!--- Etiqueta Superior triangular -->
                                                    <g>  
                                                      <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                      <!--- Texto triángulo -->  
                                                      <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                      descuento +
                      `</text>
                                                      <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                    </g>   
                                                </svg>
                                            </div>
                                            <div id="imgName" style="margin-bottom:15px">
                                                <center>
                                                    <img src="` +
                      types[x].foto +
                      `" alt="" style="width:80%; height:40%;">
                                                </center>
                                                <label id="nameProducto">` +
                      types[x].descripcion +
                      `</label>
                                            </div>
                                              
                                            <span type="text" style="font-size:15px;color:orange;" >$ ` +
                      precioDescuento.toFixed(2) +
                      `</span>
                                            <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                      types[x].valorMedida +
                      `</span>
                                            <br>
                                            <br>
                                                     
                                            <div id="cantidad">
                                                <center>
                                                    <table id="tableBotones" >
                                                        <tr>
                                                            <th scope="col">
                                                                <input type="text" name="cantidadB[]" valor="1" maxlength="2" max="50" size="1" id="cantidadB" value="1" style="display:none"/>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="9" style="border-top:2px;">
                                                                <button type="button" class="btn btn-outline-success btnAgregarPrMasV" id="btnAgregarPrMasV" idProducto ="` +
                      types[x].idMvendido +
                      `" descripcion="` +
                      types[x].descripcion +
                      `" codigoProducto ="` +
                      types[x].codigoProducto +
                      `" precioProducto ="` +
                      precio.toFixed(2) +
                      `" unidadMedida ="` +
                      types[x].unidadMedida +
                      `" foto="` +
                      types[x].foto +
                      `" precioDescuento="` +
                      precioF.toFixed(2) +
                      `" descuento="` +
                      types[x].descuento +
                      `">Agregar</button>
                                                            </td>
                                                            <td colspan="3" style="border-top:2px;">
                                                                <button style = "margin-top:0%;margin-right: 2px;" type="button" id="btnCorazonRed" class="btnCorazonRed" idProducto ="` +
                      types[x].idMvendido +
                      `" descripcion="` +
                      types[x].descripcion +
                      `" codigoProducto ="` +
                      types[x].codigoProducto +
                      `" precioProducto ="` +
                      types[x].precio +
                      `" unidadMedida ="` +
                      types[x].unidadMedida +
                      `" foto="` +
                      types[x].foto +
                      `"><i class="fas fa-heart"></i></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </div>
                                            <div class="col" id="footButtons">
                                                      
                                            </div>
                                        </div>`;
                  } else {
                    var precioDescuento = precio;
                    var div =
                      `<div class="col-lg-12 col-md-12 col-sm-12" id="contBusqueda">
                                            <div id="svgOff" style="display:none;">
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                <!--- Etiqueta Oferta de Promoción -->
                                                    <g>
                                                      <!--- Etiqueta -->
                                                      <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                      <!--- Texto -->
                                                      <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                      precio.toFixed(2) +
                      `</text>  
                                                    </g>
                                                <!--- Etiqueta Superior triangular -->
                                                    <g>  
                                                      <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                      <!--- Texto triángulo -->  
                                                      <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                      descuento +
                      `</text>
                                                      <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                    </g>   
                                                </svg>
                                            </div>
                                            <div id="imgName" style="margin-bottom:15px">
                                                <center>
                                                    <img src="` +
                      types[x].foto +
                      `" alt="" style="width:80%; height:40%;">
                                                </center>
                                                <label id="nameProducto">` +
                      types[x].descripcion +
                      `</label>
                                            </div>
                                              
                                            <span type="text" style="font-size:15px;color:orange;" >$ ` +
                      precioDescuento.toFixed(2) +
                      `</span>
                                            <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                      types[x].valorMedida +
                      `</span>
                                            <br>
                                            <br>
                                                     
                                            <div id="cantidad">
                                                <center>
                                                    <table id="tableBotones" >
                                                        <tr>
                                                            <th scope="col">
                                                                <input type="text" name="cantidadB[]" valor="1" maxlength="2" max="50" size="1" id="cantidadB" value="1" style="display:none"/>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="9" style="border-top:2px;">
                                                                <button type="button" class="btn btn-outline-success btnAgregarPrMasV" id="btnAgregarPrMasV" idProducto ="` +
                      types[x].idMvendido +
                      `" descripcion="` +
                      types[x].descripcion +
                      `" codigoProducto ="` +
                      types[x].codigoProducto +
                      `" precioProducto ="` +
                      precio.toFixed(2) +
                      `" unidadMedida ="` +
                      types[x].unidadMedida +
                      `" foto="` +
                      types[x].foto +
                      `" precioDescuento="` +
                      precioF.toFixed(2) +
                      `" descuento="` +
                      types[x].descuento +
                      `">Agregar</button>
                                                            </td>
                                                            <td colspan="3" style="border-top:2px;">
                                                                <button style = "margin-top:0%;margin-right: 2px;" type="button" id="btnCorazonRed" class="btnCorazonRed" idProducto ="` +
                      types[x].idMvendido +
                      `" descripcion="` +
                      types[x].descripcion +
                      `" codigoProducto ="` +
                      types[x].codigoProducto +
                      `" precioProducto ="` +
                      types[x].precio +
                      `" unidadMedida ="` +
                      types[x].unidadMedida +
                      `" foto="` +
                      types[x].foto +
                      `"><i class="fas fa-heart"></i></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </div>
                                            <div class="col" id="footButtons">
                                                      
                                            </div>
                                        </div>`;
                  }
                } else {
                  if (descuento != 0) {
                    var precioDescuento = precio - precioF;
                    var div =
                      `<div class="col-lg-12 col-md-12 col-sm-12" id="contBusqueda">
                                            <div id="svgOff" >
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                <!--- Etiqueta Oferta de Promoción -->
                                                    <g>
                                                        <!--- Etiqueta -->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                        <!--- Texto -->
                                                        <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                      precio.toFixed(2) +
                      `</text>  
                                                    </g>
                                                <!--- Etiqueta Superior triangular -->
                                                    <g>  
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                        <!--- Texto triángulo -->  
                                                        <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                      descuento +
                      `</text>
                                                        <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                    </g>   
                                                </svg>
                                            </div>
                                            <div id="imgName" style="margin-bottom:15px">
                                                <center>
                                                    <img src="` +
                      types[x].foto +
                      `" alt="" style="width:80%; height:40%;">
                                                </center>
                                                <label id="nameProducto">` +
                      types[x].descripcion +
                      `</label>
                                            </div>
                                            <span type="text" style="font-size:15px;color:orange;" >$ ` +
                      precioDescuento.toFixed(2) +
                      `</span>
                                            <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                      types[x].valorMedida +
                      `</span>
                                            <br>
                                            <br>

                                            <div id="cantidad">
                                                <center>
                                                    <table id="tableBotones" >
                                                        <tr>
                                                            <th scope="col">
                                                                <input type="text" name="cantidadB[]" valor="1" maxlength="2" max="50" size="1" id="cantidadB" value="1" style="display:none"/>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="9" style="border-top:2px;">
                                                                <button type="button" class="btn btn-outline-success btnAgregarPrMasV" id="btnAgregarPrMasV" idProducto ="` +
                      types[x].idMvendido +
                      `" descripcion="` +
                      types[x].descripcion +
                      `" codigoProducto ="` +
                      types[x].codigoProducto +
                      `" precioProducto ="` +
                      precio.toFixed(2) +
                      `" unidadMedida ="` +
                      types[x].unidadMedida +
                      `" foto="` +
                      types[x].foto +
                      `" precioDescuento="` +
                      precioF.toFixed(2) +
                      `" descuento="` +
                      types[x].descuento +
                      `">Agregar</button>

                                                            </td>
                                                            <td colspan="3" style="border-top:2px;">
                                                                <button style = "margin-top:0%;margin-right: 2px;" type="button" id="btnCorazon" class="btnCorazon" idProducto ="` +
                      types[x].idMvendido +
                      `" descripcion="` +
                      types[x].descripcion +
                      `" codigoProducto ="` +
                      types[x].codigoProducto +
                      `" precioProducto ="` +
                      types[x].precio +
                      `" unidadMedida ="` +
                      types[x].unidadMedida +
                      `" foto="` +
                      types[x].foto +
                      `"><i class="fas fa-heart"></i></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </div>
                                            <div class="col" id="footButtons">
                                                  
                                            </div>
                                        </div>`;
                  } else {
                    var precioDescuento = precio;
                    var div =
                      `<div class="col-lg-12 col-md-12 col-sm-12" id="contBusqueda">
                                            <div id="svgOff" style="display:none;">
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                <!--- Etiqueta Oferta de Promoción -->
                                                    <g>
                                                        <!--- Etiqueta -->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                        <!--- Texto -->
                                                        <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                      precio.toFixed(2) +
                      `</text>  
                                                    </g>
                                                <!--- Etiqueta Superior triangular -->
                                                    <g>  
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                        <!--- Texto triángulo -->  
                                                        <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                      descuento +
                      `</text>
                                                        <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                    </g>   
                                                </svg>
                                            </div>
                                            <div id="imgName" style="margin-bottom:15px">
                                                <center>
                                                    <img src="` +
                      types[x].foto +
                      `" alt="" style="width:80%; height:40%;">
                                                </center>
                                                <label id="nameProducto">` +
                      types[x].descripcion +
                      `</label>
                                            </div>
                                            <span type="text" style="font-size:15px;color:orange;" >$ ` +
                      precioDescuento.toFixed(2) +
                      `</span>
                                            <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                      types[x].valorMedida +
                      `</span>
                                            <br>
                                            <br>

                                            <div id="cantidad">
                                                <center>
                                                    <table id="tableBotones" >
                                                        <tr>
                                                            <th scope="col">
                                                                <input type="text" name="cantidadB[]" valor="1" maxlength="2" max="50" size="1" id="cantidadB" value="1" style="display:none"/>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="9" style="border-top:2px;">
                                                                <button type="button" class="btn btn-outline-success btnAgregarPrMasV" id="btnAgregarPrMasV" idProducto ="` +
                      types[x].idMvendido +
                      `" descripcion="` +
                      types[x].descripcion +
                      `" codigoProducto ="` +
                      types[x].codigoProducto +
                      `" precioProducto ="` +
                      precio.toFixed(2) +
                      `" unidadMedida ="` +
                      types[x].unidadMedida +
                      `" foto="` +
                      types[x].foto +
                      `" precioDescuento="` +
                      precioF.toFixed(2) +
                      `" descuento="` +
                      types[x].descuento +
                      `">Agregar</button>
                                                            </td>
                                                            <td colspan="3" style="border-top:2px;">
                                                                <button style = "margin-top:0%;margin-right: 2px;" type="button" id="btnCorazon" class="btnCorazon" idProducto ="` +
                      types[x].idMvendido +
                      `" descripcion="` +
                      types[x].descripcion +
                      `" codigoProducto ="` +
                      types[x].codigoProducto +
                      `" precioProducto ="` +
                      types[x].precio +
                      `" unidadMedida ="` +
                      types[x].unidadMedida +
                      `" foto="` +
                      types[x].foto +
                      `"><i class="fas fa-heart"></i></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </div>
                                            <div class="col" id="footButtons">
                                                  
                                            </div>
                                        </div>`;
                  }
                }

                $("#tableResultadosBusqueda").append(div);
              }
              //window.location.href = "masVendido.html";
            } else if (data == "failed") {
              //swal("Upss", "No se encontraron los resultados para tu busqueda.", "info");
            }
          },
        });
      } else {
        document.getElementById("loader").style.display = "";
        var nodos = document.getElementById("tableResultadosBusqueda");
        while (nodos.firstChild) {
          nodos.removeChild(nodos.firstChild);
        }
      }
    }
  });
  $("#buscadorProductos").on("keyup", function (e) {
    var nodos = document.getElementById("tableResultadosBusqueda");
    while (nodos.firstChild) {
      nodos.removeChild(nodos.firstChild);
    }
    e.preventDefault(); // se previene la acción por defecto
    var search = $("#buscadorProductos").val();
    localStorage.setItem("busqueda", search);
    var busqueda = localStorage.getItem("busqueda");
    var dataString = "search=" + busqueda + "&listarResultadosBusqueda=";
    if ($.trim(busqueda).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          var nodos = document.getElementById("tableResultadosBusqueda");
          while (nodos.firstChild) {
            nodos.removeChild(nodos.firstChild);
          }
        },
        success: function (data) {
          if (data != "failed") {
            document.getElementById("loader").style.display = "none";

            var json = data;
            var types = JSON.parse(json);
            //alert(types.length);
            for (x = 0; x < types.length; x++) {
              var precio = types[x].precio * 1;
              var descuento = types[x].descuento * 1;
              var precioF = (precio * descuento) / 100;
              //console.log(precioF);
              if (types[x].favorito == 1) {
                if (descuento != 0) {
                  var precioDescuento = precio - precioF;
                  var div =
                    `<div class="col-lg-12 col-md-12 col-sm-12" id="contBusqueda">
                                            <div id="svgOff" >
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                <!--- Etiqueta Oferta de Promoción -->
                                                    <g>
                                                      <!--- Etiqueta -->
                                                      <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                      <!--- Texto -->
                                                      <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                    precio.toFixed(2) +
                    `</text>  
                                                    </g>
                                                <!--- Etiqueta Superior triangular -->
                                                    <g>  
                                                      <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                      <!--- Texto triángulo -->  
                                                      <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                    descuento +
                    `</text>
                                                      <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                    </g>   
                                                </svg>
                                            </div>
                                            <div id="imgName" style="margin-bottom:15px">
                                                <center>
                                                    <img src="` +
                    types[x].foto +
                    `" alt="" style="width:80%; height:40%;">
                                                </center>
                                                <label id="nameProducto">` +
                    types[x].descripcion +
                    `</label>
                                            </div>
                                              
                                            <span type="text" style="font-size:15px;color:orange;" >$ ` +
                    precioDescuento.toFixed(2) +
                    `</span>
                                            <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                    types[x].valorMedida +
                    `</span>
                                            <br>
                                            <br>
                                                     
                                            <div id="cantidad">
                                                <center>
                                                    <table id="tableBotones" >
                                                        <tr>
                                                            <th scope="col">
                                                                <input type="text" name="cantidadB[]" valor="1" maxlength="2" max="50" size="1" id="cantidadB" value="1" style="display:none"/>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="9" style="border-top:2px;">
                                                                <button type="button" class="btn btn-outline-success btnAgregarPrMasV" id="btnAgregarPrMasV" idProducto ="` +
                    types[x].idMvendido +
                    `" descripcion="` +
                    types[x].descripcion +
                    `" codigoProducto ="` +
                    types[x].codigoProducto +
                    `" precioProducto ="` +
                    precio.toFixed(2) +
                    `" unidadMedida ="` +
                    types[x].unidadMedida +
                    `" foto="` +
                    types[x].foto +
                    `" precioDescuento="` +
                    precioF.toFixed(2) +
                    `" descuento="` +
                    types[x].descuento +
                    `">Agregar</button>
                                                            </td>
                                                            <td colspan="3" style="border-top:2px;">
                                                                <button style = "margin-top:0%;margin-right: 2px;" type="button" id="btnCorazonRed" class="btnCorazonRed" idProducto ="` +
                    types[x].idMvendido +
                    `" descripcion="` +
                    types[x].descripcion +
                    `" codigoProducto ="` +
                    types[x].codigoProducto +
                    `" precioProducto ="` +
                    types[x].precio +
                    `" unidadMedida ="` +
                    types[x].unidadMedida +
                    `" foto="` +
                    types[x].foto +
                    `"><i class="fas fa-heart"></i></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </div>
                                            <div class="col" id="footButtons">
                                                      
                                            </div>
                                        </div>`;
                } else {
                  var precioDescuento = precio;
                  var div =
                    `<div class="col-lg-12 col-md-12 col-sm-12" id="contBusqueda">
                                            <div id="svgOff" style="display:none;">
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                <!--- Etiqueta Oferta de Promoción -->
                                                    <g>
                                                      <!--- Etiqueta -->
                                                      <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                      <!--- Texto -->
                                                      <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                    precio.toFixed(2) +
                    `</text>  
                                                    </g>
                                                <!--- Etiqueta Superior triangular -->
                                                    <g>  
                                                      <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                      <!--- Texto triángulo -->  
                                                      <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                    descuento +
                    `</text>
                                                      <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                    </g>   
                                                </svg>
                                            </div>
                                            <div id="imgName" style="margin-bottom:15px">
                                                <center>
                                                    <img src="` +
                    types[x].foto +
                    `" alt="" style="width:80%; height:40%;">
                                                </center>
                                                <label id="nameProducto">` +
                    types[x].descripcion +
                    `</label>
                                            </div>
                                              
                                            <span type="text" style="font-size:15px;color:orange;" >$ ` +
                    precioDescuento.toFixed(2) +
                    `</span>
                                            <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                    types[x].valorMedida +
                    `</span>
                                            <br>
                                            <br>
                                                     
                                            <div id="cantidad">
                                                <center>
                                                    <table id="tableBotones" >
                                                        <tr>
                                                            <th scope="col">
                                                                <input type="text" name="cantidadB[]" valor="1" maxlength="2" max="50" size="1" id="cantidadB" value="1" style="display:none"/>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="9" style="border-top:2px;">
                                                                <button type="button" class="btn btn-outline-success btnAgregarPrMasV" id="btnAgregarPrMasV" idProducto ="` +
                    types[x].idMvendido +
                    `" descripcion="` +
                    types[x].descripcion +
                    `" codigoProducto ="` +
                    types[x].codigoProducto +
                    `" precioProducto ="` +
                    precio.toFixed(2) +
                    `" unidadMedida ="` +
                    types[x].unidadMedida +
                    `" foto="` +
                    types[x].foto +
                    `" precioDescuento="` +
                    precioF.toFixed(2) +
                    `" descuento="` +
                    types[x].descuento +
                    `">Agregar</button>
                                                            </td>
                                                            <td colspan="3" style="border-top:2px;">
                                                                <button style = "margin-top:0%;margin-right: 2px;" type="button" id="btnCorazonRed" class="btnCorazonRed" idProducto ="` +
                    types[x].idMvendido +
                    `" descripcion="` +
                    types[x].descripcion +
                    `" codigoProducto ="` +
                    types[x].codigoProducto +
                    `" precioProducto ="` +
                    types[x].precio +
                    `" unidadMedida ="` +
                    types[x].unidadMedida +
                    `" foto="` +
                    types[x].foto +
                    `"><i class="fas fa-heart"></i></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </div>
                                            <div class="col" id="footButtons">
                                                      
                                            </div>
                                        </div>`;
                }
              } else {
                if (descuento != 0) {
                  var precioDescuento = precio - precioF;
                  var div =
                    `<div class="col-lg-12 col-md-12 col-sm-12" id="contBusqueda">
                                            <div id="svgOff" >
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                <!--- Etiqueta Oferta de Promoción -->
                                                    <g>
                                                        <!--- Etiqueta -->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                        <!--- Texto -->
                                                        <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                    precio.toFixed(2) +
                    `</text>  
                                                    </g>
                                                <!--- Etiqueta Superior triangular -->
                                                    <g>  
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                        <!--- Texto triángulo -->  
                                                        <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                    descuento +
                    `</text>
                                                        <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                    </g>   
                                                </svg>
                                            </div>
                                            <div id="imgName" style="margin-bottom:15px">
                                                <center>
                                                    <img src="` +
                    types[x].foto +
                    `" alt="" style="width:80%; height:40%;">
                                                </center>
                                                <label id="nameProducto">` +
                    types[x].descripcion +
                    `</label>
                                            </div>
                                            <span type="text" style="font-size:15px;color:orange;" >$ ` +
                    precioDescuento.toFixed(2) +
                    `</span>
                                            <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                    types[x].valorMedida +
                    `</span>
                                            <br>
                                            <br>

                                            <div id="cantidad">
                                                <center>
                                                    <table id="tableBotones" >
                                                        <tr>
                                                            <th scope="col">
                                                                <input type="text" name="cantidadB[]" valor="1" maxlength="2" max="50" size="1" id="cantidadB" value="1" style="display:none"/>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="9" style="border-top:2px;">
                                                                <button type="button" class="btn btn-outline-success btnAgregarPrMasV" id="btnAgregarPrMasV" idProducto ="` +
                    types[x].idMvendido +
                    `" descripcion="` +
                    types[x].descripcion +
                    `" codigoProducto ="` +
                    types[x].codigoProducto +
                    `" precioProducto ="` +
                    precio.toFixed(2) +
                    `" unidadMedida ="` +
                    types[x].unidadMedida +
                    `" foto="` +
                    types[x].foto +
                    `" precioDescuento="` +
                    precioF.toFixed(2) +
                    `" descuento="` +
                    types[x].descuento +
                    `">Agregar</button>

                                                            </td>
                                                            <td colspan="3" style="border-top:2px;">
                                                                <button style = "margin-top:0%;margin-right: 2px;" type="button" id="btnCorazon" class="btnCorazon" idProducto ="` +
                    types[x].idMvendido +
                    `" descripcion="` +
                    types[x].descripcion +
                    `" codigoProducto ="` +
                    types[x].codigoProducto +
                    `" precioProducto ="` +
                    types[x].precio +
                    `" unidadMedida ="` +
                    types[x].unidadMedida +
                    `" foto="` +
                    types[x].foto +
                    `"><i class="fas fa-heart"></i></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </div>
                                            <div class="col" id="footButtons">
                                                  
                                            </div>
                                        </div>`;
                } else {
                  var precioDescuento = precio;
                  var div =
                    `<div class="col-lg-12 col-md-12 col-sm-12" id="contBusqueda">
                                            <div id="svgOff" style="display:none;">
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                <!--- Etiqueta Oferta de Promoción -->
                                                    <g>
                                                        <!--- Etiqueta -->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                        <!--- Texto -->
                                                        <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                    precio.toFixed(2) +
                    `</text>  
                                                    </g>
                                                <!--- Etiqueta Superior triangular -->
                                                    <g>  
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                        <!--- Texto triángulo -->  
                                                        <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                    descuento +
                    `</text>
                                                        <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                    </g>   
                                                </svg>
                                            </div>
                                            <div id="imgName" style="margin-bottom:15px">
                                                <center>
                                                    <img src="` +
                    types[x].foto +
                    `" alt="" style="width:80%; height:40%;">
                                                </center>
                                                <label id="nameProducto">` +
                    types[x].descripcion +
                    `</label>
                                            </div>
                                            <span type="text" style="font-size:15px;color:orange;" >$ ` +
                    precioDescuento.toFixed(2) +
                    `</span>
                                            <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                    types[x].valorMedida +
                    `</span>
                                            <br>
                                            <br>

                                            <div id="cantidad">
                                                <center>
                                                    <table id="tableBotones" >
                                                        <tr>
                                                            <th scope="col">
                                                                <input type="text" name="cantidadB[]" valor="1" maxlength="2" max="50" size="1" id="cantidadB" value="1" style="display:none"/>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="9" style="border-top:2px;">
                                                                <button type="button" class="btn btn-outline-success btnAgregarPrMasV" id="btnAgregarPrMasV" idProducto ="` +
                    types[x].idMvendido +
                    `" descripcion="` +
                    types[x].descripcion +
                    `" codigoProducto ="` +
                    types[x].codigoProducto +
                    `" precioProducto ="` +
                    precio.toFixed(2) +
                    `" unidadMedida ="` +
                    types[x].unidadMedida +
                    `" foto="` +
                    types[x].foto +
                    `" precioDescuento="` +
                    precioF.toFixed(2) +
                    `" descuento="` +
                    types[x].descuento +
                    `">Agregar</button>
                                                            </td>
                                                            <td colspan="3" style="border-top:2px;">
                                                                <button style = "margin-top:0%;margin-right: 2px;" type="button" id="btnCorazon" class="btnCorazon" idProducto ="` +
                    types[x].idMvendido +
                    `" descripcion="` +
                    types[x].descripcion +
                    `" codigoProducto ="` +
                    types[x].codigoProducto +
                    `" precioProducto ="` +
                    types[x].precio +
                    `" unidadMedida ="` +
                    types[x].unidadMedida +
                    `" foto="` +
                    types[x].foto +
                    `"><i class="fas fa-heart"></i></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </div>
                                            <div class="col" id="footButtons">
                                                  
                                            </div>
                                        </div>`;
                }
              }

              $("#tableResultadosBusqueda").append(div);
            }
            //window.location.href = "masVendido.html";
          } else if (data == "failed") {
            //swal("Upss", "No se encontraron los resultados para tu busqueda.", "info");
          }
        },
      });
    } else {
      document.getElementById("loader").style.display = "";
      var nodos = document.getElementById("tableResultadosBusqueda");
      while (nodos.firstChild) {
        nodos.removeChild(nodos.firstChild);
      }
    }
    return false;
  });
  /***********FAVORITOS BUSCADOR******************/
  $("#tableResultadosBusqueda").on("click", ".btnCorazon", function () {
    var idCliente = localStorage.idCliente;
    var idProducto = $(this).attr("idProducto");
    var codigoProducto = $(this).attr("codigoProducto");
    var precioElegido = $(this).attr("precioProducto");
    var unidadElegida = $(this).attr("unidadMedida");
    var dataString =
      "idProducto=" +
      idProducto +
      "&idCliente=" +
      idCliente +
      "&codigoProducto=" +
      codigoProducto +
      "&precioElegido=" +
      precioElegido +
      "&unidadElegida=" +
      unidadElegida +
      "&addFavoritos=";
    if (($.trim(idProducto).length > 0) & ($.trim(idCliente).length > 0)) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {},
        success: function (data) {
          if (data == "failed") {
            swal("Error al eliminar", "", "error");
          } else if (data == "failed") {
            swal("Algo Salio Mal...", "Error al Agregar a Favoritos", "error");
          } else if (data == "success") {
            var busqueda = localStorage.getItem("busqueda");
            if (busqueda == null) {
              document.getElementById("loader").style.display = "";
            } else {
              var nodos = document.getElementById("tableResultadosBusqueda");
              while (nodos.firstChild) {
                nodos.removeChild(nodos.firstChild);
              }
              var busqueda = localStorage.getItem("busqueda");
              document.getElementById("loader").style.display = "none";
              var dataString =
                "search=" + busqueda + "&listarResultadosBusqueda=";
              if ($.trim(busqueda).length > 0) {
                $.ajax({
                  type: "POST",
                  url: url,
                  data: dataString,
                  crossDomain: true,
                  cache: false,
                  beforeSend: function () {},
                  success: function (data) {
                    if (data != "failed") {
                      document.getElementById("loader").style.display = "none";

                      var json = data;
                      var types = JSON.parse(json);
                      //alert(types.length);
                      for (x = 0; x < types.length; x++) {
                        var precio = types[x].precio * 1;
                        var descuento = types[x].descuento * 1;
                        var precioF = (precio * descuento) / 100;
                        //console.log(precioF);
                        if (types[x].favorito == 1) {
                          if (descuento != 0) {
                            var precioDescuento = precio - precioF;
                            var div =
                              `<div class="col-lg-12 col-md-12 col-sm-12" id="contBusqueda">
                                            <div id="svgOff" >
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                <!--- Etiqueta Oferta de Promoción -->
                                                    <g>
                                                      <!--- Etiqueta -->
                                                      <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                      <!--- Texto -->
                                                      <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                              precio.toFixed(2) +
                              `</text>  
                                                    </g>
                                                <!--- Etiqueta Superior triangular -->
                                                    <g>  
                                                      <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                      <!--- Texto triángulo -->  
                                                      <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                              descuento +
                              `</text>
                                                      <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                    </g>   
                                                </svg>
                                            </div>
                                            <div id="imgName" style="margin-bottom:15px">
                                                <center>
                                                    <img src="` +
                              types[x].foto +
                              `" alt="" style="width:80%; height:40%;">
                                                </center>
                                                <label id="nameProducto">` +
                              types[x].descripcion +
                              `</label>
                                            </div>
                                              
                                            <span type="text" style="font-size:15px;color:orange;" >$ ` +
                              precioDescuento.toFixed(2) +
                              `</span>
                                            <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                              types[x].valorMedida +
                              `</span>
                                            <br>
                                            <br>
                                                     
                                            <div id="cantidad">
                                                <center>
                                                    <table id="tableBotones" >
                                                        <tr>
                                                            <th scope="col">
                                                                <input type="text" name="cantidadB[]" valor="1" maxlength="2" max="50" size="1" id="cantidadB" value="1" style="display:none"/>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="9" style="border-top:2px;">
                                                                <button type="button" class="btn btn-outline-success btnAgregarPrMasV" id="btnAgregarPrMasV" idProducto ="` +
                              types[x].idMvendido +
                              `" descripcion="` +
                              types[x].descripcion +
                              `" codigoProducto ="` +
                              types[x].codigoProducto +
                              `" precioProducto ="` +
                              precio.toFixed(2) +
                              `" unidadMedida ="` +
                              types[x].unidadMedida +
                              `" foto="` +
                              types[x].foto +
                              `" precioDescuento="` +
                              precioF.toFixed(2) +
                              `" descuento="` +
                              types[x].descuento +
                              `">Agregar</button>
                                                            </td>
                                                            <td colspan="3" style="border-top:2px;">
                                                                <button style = "margin-top:0%;margin-right: 2px;" type="button" id="btnCorazonRed" class="btnCorazonRed" idProducto ="` +
                              types[x].idMvendido +
                              `" descripcion="` +
                              types[x].descripcion +
                              `" codigoProducto ="` +
                              types[x].codigoProducto +
                              `" precioProducto ="` +
                              types[x].precio +
                              `" unidadMedida ="` +
                              types[x].unidadMedida +
                              `" foto="` +
                              types[x].foto +
                              `"><i class="fas fa-heart"></i></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </div>
                                            <div class="col" id="footButtons">
                                                      
                                            </div>
                                        </div>`;
                          } else {
                            var precioDescuento = precio;
                            var div =
                              `<div class="col-lg-12 col-md-12 col-sm-12" id="contBusqueda">
                                            <div id="svgOff" style="display:none;">
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                <!--- Etiqueta Oferta de Promoción -->
                                                    <g>
                                                      <!--- Etiqueta -->
                                                      <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                      <!--- Texto -->
                                                      <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                              precio.toFixed(2) +
                              `</text>  
                                                    </g>
                                                <!--- Etiqueta Superior triangular -->
                                                    <g>  
                                                      <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                      <!--- Texto triángulo -->  
                                                      <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                              descuento +
                              `</text>
                                                      <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                    </g>   
                                                </svg>
                                            </div>
                                            <div id="imgName" style="margin-bottom:15px">
                                                <center>
                                                    <img src="` +
                              types[x].foto +
                              `" alt="" style="width:80%; height:40%;">
                                                </center>
                                                <label id="nameProducto">` +
                              types[x].descripcion +
                              `</label>
                                            </div>
                                              
                                            <span type="text" style="font-size:15px;color:orange;" >$ ` +
                              precioDescuento.toFixed(2) +
                              `</span>
                                            <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                              types[x].valorMedida +
                              `</span>
                                            <br>
                                            <br>
                                                     
                                            <div id="cantidad">
                                                <center>
                                                    <table id="tableBotones" >
                                                        <tr>
                                                            <th scope="col">
                                                                <input type="text" name="cantidadB[]" valor="1" maxlength="2" max="50" size="1" id="cantidadB" value="1" style="display:none"/>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="9" style="border-top:2px;">
                                                                <button type="button" class="btn btn-outline-success btnAgregarPrMasV" id="btnAgregarPrMasV" idProducto ="` +
                              types[x].idMvendido +
                              `" descripcion="` +
                              types[x].descripcion +
                              `" codigoProducto ="` +
                              types[x].codigoProducto +
                              `" precioProducto ="` +
                              precio.toFixed(2) +
                              `" unidadMedida ="` +
                              types[x].unidadMedida +
                              `" foto="` +
                              types[x].foto +
                              `" precioDescuento="` +
                              precioF.toFixed(2) +
                              `" descuento="` +
                              types[x].descuento +
                              `">Agregar</button>
                                                            </td>
                                                            <td colspan="3" style="border-top:2px;">
                                                                <button style = "margin-top:0%;margin-right: 2px;" type="button" id="btnCorazonRed" class="btnCorazonRed" idProducto ="` +
                              types[x].idMvendido +
                              `" descripcion="` +
                              types[x].descripcion +
                              `" codigoProducto ="` +
                              types[x].codigoProducto +
                              `" precioProducto ="` +
                              types[x].precio +
                              `" unidadMedida ="` +
                              types[x].unidadMedida +
                              `" foto="` +
                              types[x].foto +
                              `"><i class="fas fa-heart"></i></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </div>
                                            <div class="col" id="footButtons">
                                                      
                                            </div>
                                        </div>`;
                          }
                        } else {
                          if (descuento != 0) {
                            var precioDescuento = precio - precioF;
                            var div =
                              `<div class="col-lg-12 col-md-12 col-sm-12" id="contBusqueda">
                                            <div id="svgOff" >
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                <!--- Etiqueta Oferta de Promoción -->
                                                    <g>
                                                        <!--- Etiqueta -->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                        <!--- Texto -->
                                                        <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                              precio.toFixed(2) +
                              `</text>  
                                                    </g>
                                                <!--- Etiqueta Superior triangular -->
                                                    <g>  
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                        <!--- Texto triángulo -->  
                                                        <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                              descuento +
                              `</text>
                                                        <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                    </g>   
                                                </svg>
                                            </div>
                                            <div id="imgName" style="margin-bottom:15px">
                                                <center>
                                                    <img src="` +
                              types[x].foto +
                              `" alt="" style="width:80%; height:40%;">
                                                </center>
                                                <label id="nameProducto">` +
                              types[x].descripcion +
                              `</label>
                                            </div>
                                            <span type="text" style="font-size:15px;color:orange;" >$ ` +
                              precioDescuento.toFixed(2) +
                              `</span>
                                            <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                              types[x].valorMedida +
                              `</span>
                                            <br>
                                            <br>

                                            <div id="cantidad">
                                                <center>
                                                    <table id="tableBotones" >
                                                        <tr>
                                                            <th scope="col">
                                                                <input type="text" name="cantidadB[]" valor="1" maxlength="2" max="50" size="1" id="cantidadB" value="1" style="display:none"/>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="9" style="border-top:2px;">
                                                                <button type="button" class="btn btn-outline-success btnAgregarPrMasV" id="btnAgregarPrMasV" idProducto ="` +
                              types[x].idMvendido +
                              `" descripcion="` +
                              types[x].descripcion +
                              `" codigoProducto ="` +
                              types[x].codigoProducto +
                              `" precioProducto ="` +
                              precio.toFixed(2) +
                              `" unidadMedida ="` +
                              types[x].unidadMedida +
                              `" foto="` +
                              types[x].foto +
                              `" precioDescuento="` +
                              precioF.toFixed(2) +
                              `" descuento="` +
                              types[x].descuento +
                              `">Agregar</button>

                                                            </td>
                                                            <td colspan="3" style="border-top:2px;">
                                                                <button style = "margin-top:0%;margin-right: 2px;" type="button" id="btnCorazon" class="btnCorazon" idProducto ="` +
                              types[x].idMvendido +
                              `" descripcion="` +
                              types[x].descripcion +
                              `" codigoProducto ="` +
                              types[x].codigoProducto +
                              `" precioProducto ="` +
                              types[x].precio +
                              `" unidadMedida ="` +
                              types[x].unidadMedida +
                              `" foto="` +
                              types[x].foto +
                              `"><i class="fas fa-heart"></i></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </div>
                                            <div class="col" id="footButtons">
                                                  
                                            </div>
                                        </div>`;
                          } else {
                            var precioDescuento = precio;
                            var div =
                              `<div class="col-lg-12 col-md-12 col-sm-12" id="contBusqueda">
                                            <div id="svgOff" style="display:none;">
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                <!--- Etiqueta Oferta de Promoción -->
                                                    <g>
                                                        <!--- Etiqueta -->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                        <!--- Texto -->
                                                        <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                              precio.toFixed(2) +
                              `</text>  
                                                    </g>
                                                <!--- Etiqueta Superior triangular -->
                                                    <g>  
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                        <!--- Texto triángulo -->  
                                                        <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                              descuento +
                              `</text>
                                                        <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                    </g>   
                                                </svg>
                                            </div>
                                            <div id="imgName" style="margin-bottom:15px">
                                                <center>
                                                    <img src="` +
                              types[x].foto +
                              `" alt="" style="width:80%; height:40%;">
                                                </center>
                                                <label id="nameProducto">` +
                              types[x].descripcion +
                              `</label>
                                            </div>
                                            <span type="text" style="font-size:15px;color:orange;" >$ ` +
                              precioDescuento.toFixed(2) +
                              `</span>
                                            <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                              types[x].valorMedida +
                              `</span>
                                            <br>
                                            <br>

                                            <div id="cantidad">
                                                <center>
                                                    <table id="tableBotones" >
                                                        <tr>
                                                            <th scope="col">
                                                                <input type="text" name="cantidadB[]" valor="1" maxlength="2" max="50" size="1" id="cantidadB" value="1" style="display:none"/>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="9" style="border-top:2px;">
                                                                <button type="button" class="btn btn-outline-success btnAgregarPrMasV" id="btnAgregarPrMasV" idProducto ="` +
                              types[x].idMvendido +
                              `" descripcion="` +
                              types[x].descripcion +
                              `" codigoProducto ="` +
                              types[x].codigoProducto +
                              `" precioProducto ="` +
                              precio.toFixed(2) +
                              `" unidadMedida ="` +
                              types[x].unidadMedida +
                              `" foto="` +
                              types[x].foto +
                              `" precioDescuento="` +
                              precioF.toFixed(2) +
                              `" descuento="` +
                              types[x].descuento +
                              `">Agregar</button>
                                                            </td>
                                                            <td colspan="3" style="border-top:2px;">
                                                                <button style = "margin-top:0%;margin-right: 2px;" type="button" id="btnCorazon" class="btnCorazon" idProducto ="` +
                              types[x].idMvendido +
                              `" descripcion="` +
                              types[x].descripcion +
                              `" codigoProducto ="` +
                              types[x].codigoProducto +
                              `" precioProducto ="` +
                              types[x].precio +
                              `" unidadMedida ="` +
                              types[x].unidadMedida +
                              `" foto="` +
                              types[x].foto +
                              `"><i class="fas fa-heart"></i></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </div>
                                            <div class="col" id="footButtons">
                                                  
                                            </div>
                                        </div>`;
                          }
                        }
                        $("#tableResultadosBusqueda").append(div);
                      }
                      //window.location.href = "masVendido.html";
                    } else if (data == "failed") {
                      //swal("Upss", "No se encontraron los resultados para tu busqueda.", "info");
                    }
                  },
                });
              } else {
                document.getElementById("loader").style.display = "";
                var nodos = document.getElementById("tableResultadosBusqueda");
                while (nodos.firstChild) {
                  nodos.removeChild(nodos.firstChild);
                }
              }
            }
          } else if (data == "exist") {
            swal(
              "Upss...",
              "El producto ya se encuentra agregado a mis favoritos.",
              "info"
            );
          }
        },
      });
    } else {
      swal("Alto!", "No Se ha seleccionado ningún Producto", "info");
    }
    return false;
  });
  /**
   * QUITAR FAVORITOS CON BOTON CON CORAZON
   */
  $("#tableResultadosBusqueda").on("click", ".btnCorazonRed", function () {
    var idCliente = localStorage.idCliente;
    var idProductoF = $(this).attr("idProducto");
    var dataString =
      "idProductoF=" +
      idProductoF +
      "&idCliente=" +
      idCliente +
      "&deleteFavoritosRed=";

    if (($.trim(idProductoF).length > 0) & ($.trim(idCliente).length > 0)) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {},
        success: function (data) {
          if (data == "failed") {
            swal("Error al eliminar", "", "error");
          } else if (data == "success") {
            var busqueda = localStorage.getItem("busqueda");
            if (busqueda == null) {
              document.getElementById("loader").style.display = "";
            } else {
              var nodos = document.getElementById("tableResultadosBusqueda");
              while (nodos.firstChild) {
                nodos.removeChild(nodos.firstChild);
              }
              var busqueda = localStorage.getItem("busqueda");
              document.getElementById("loader").style.display = "none";
              var dataString =
                "search=" + busqueda + "&listarResultadosBusqueda=";
              if ($.trim(busqueda).length > 0) {
                $.ajax({
                  type: "POST",
                  url: url,
                  data: dataString,
                  crossDomain: true,
                  cache: false,
                  beforeSend: function () {},
                  success: function (data) {
                    if (data != "failed") {
                      document.getElementById("loader").style.display = "none";

                      var json = data;
                      var types = JSON.parse(json);

                      for (x = 0; x < types.length; x++) {
                        var precio = types[x].precio * 1;
                        var descuento = types[x].descuento * 1;
                        var precioF = (precio * descuento) / 100;
                        //console.log(precioF);
                        if (types[x].favorito == 1) {
                          if (descuento != 0) {
                            var precioDescuento = precio - precioF;
                            var div =
                              `<div class="col-lg-12 col-md-12 col-sm-12" id="contBusqueda">
                                            <div id="svgOff" >
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                <!--- Etiqueta Oferta de Promoción -->
                                                    <g>
                                                      <!--- Etiqueta -->
                                                      <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                      <!--- Texto -->
                                                      <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                              precio.toFixed(2) +
                              `</text>  
                                                    </g>
                                                <!--- Etiqueta Superior triangular -->
                                                    <g>  
                                                      <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                      <!--- Texto triángulo -->  
                                                      <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                              descuento +
                              `</text>
                                                      <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                    </g>   
                                                </svg>
                                            </div>
                                            <div id="imgName" style="margin-bottom:15px">
                                                <center>
                                                    <img src="` +
                              types[x].foto +
                              `" alt="" style="width:80%; height:40%;">
                                                </center>
                                                <label id="nameProducto">` +
                              types[x].descripcion +
                              `</label>
                                            </div>
                                              
                                            <span type="text" style="font-size:15px;color:orange;" >$ ` +
                              precioDescuento.toFixed(2) +
                              `</span>
                                            <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                              types[x].valorMedida +
                              `</span>
                                            <br>
                                            <br>
                                                     
                                            <div id="cantidad">
                                                <center>
                                                    <table id="tableBotones" >
                                                        <tr>
                                                            <th scope="col">
                                                                <input type="text" name="cantidadB[]" valor="1" maxlength="2" max="50" size="1" id="cantidadB" value="1" style="display:none"/>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="9" style="border-top:2px;">
                                                                <button type="button" class="btn btn-outline-success btnAgregarPrMasV" id="btnAgregarPrMasV" idProducto ="` +
                              types[x].idMvendido +
                              `" descripcion="` +
                              types[x].descripcion +
                              `" codigoProducto ="` +
                              types[x].codigoProducto +
                              `" precioProducto ="` +
                              precio.toFixed(2) +
                              `" unidadMedida ="` +
                              types[x].unidadMedida +
                              `" foto="` +
                              types[x].foto +
                              `" precioDescuento="` +
                              precioF.toFixed(2) +
                              `" descuento="` +
                              types[x].descuento +
                              `">Agregar</button>
                                                            </td>
                                                            <td colspan="3" style="border-top:2px;">
                                                                <button style = "margin-top:0%;margin-right: 2px;" type="button" id="btnCorazonRed" class="btnCorazonRed" idProducto ="` +
                              types[x].idMvendido +
                              `" descripcion="` +
                              types[x].descripcion +
                              `" codigoProducto ="` +
                              types[x].codigoProducto +
                              `" precioProducto ="` +
                              types[x].precio +
                              `" unidadMedida ="` +
                              types[x].unidadMedida +
                              `" foto="` +
                              types[x].foto +
                              `"><i class="fas fa-heart"></i></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </div>
                                            <div class="col" id="footButtons">
                                                      
                                            </div>
                                        </div>`;
                          } else {
                            var precioDescuento = precio;
                            var div =
                              `<div class="col-lg-12 col-md-12 col-sm-12" id="contBusqueda">
                                            <div id="svgOff" style="display:none;">
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                <!--- Etiqueta Oferta de Promoción -->
                                                    <g>
                                                      <!--- Etiqueta -->
                                                      <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                      <!--- Texto -->
                                                      <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                              precio.toFixed(2) +
                              `</text>  
                                                    </g>
                                                <!--- Etiqueta Superior triangular -->
                                                    <g>  
                                                      <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                      <!--- Texto triángulo -->  
                                                      <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                              descuento +
                              `</text>
                                                      <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                    </g>   
                                                </svg>
                                            </div>
                                            <div id="imgName" style="margin-bottom:15px">
                                                <center>
                                                    <img src="` +
                              types[x].foto +
                              `" alt="" style="width:80%; height:40%;">
                                                </center>
                                                <label id="nameProducto">` +
                              types[x].descripcion +
                              `</label>
                                            </div>
                                              
                                            <span type="text" style="font-size:15px;color:orange;" >$ ` +
                              precioDescuento.toFixed(2) +
                              `</span>
                                            <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                              types[x].valorMedida +
                              `</span>
                                            <br>
                                            <br>
                                                     
                                            <div id="cantidad">
                                                <center>
                                                    <table id="tableBotones" >
                                                        <tr>
                                                            <th scope="col">
                                                                <input type="text" name="cantidadB[]" valor="1" maxlength="2" max="50" size="1" id="cantidadB" value="1" style="display:none"/>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="9" style="border-top:2px;">
                                                                <button type="button" class="btn btn-outline-success btnAgregarPrMasV" id="btnAgregarPrMasV" idProducto ="` +
                              types[x].idMvendido +
                              `" descripcion="` +
                              types[x].descripcion +
                              `" codigoProducto ="` +
                              types[x].codigoProducto +
                              `" precioProducto ="` +
                              precio.toFixed(2) +
                              `" unidadMedida ="` +
                              types[x].unidadMedida +
                              `" foto="` +
                              types[x].foto +
                              `" precioDescuento="` +
                              precioF.toFixed(2) +
                              `" descuento="` +
                              types[x].descuento +
                              `">Agregar</button>
                                                            </td>
                                                            <td colspan="3" style="border-top:2px;">
                                                                <button style = "margin-top:0%;margin-right: 2px;" type="button" id="btnCorazonRed" class="btnCorazonRed" idProducto ="` +
                              types[x].idMvendido +
                              `" descripcion="` +
                              types[x].descripcion +
                              `" codigoProducto ="` +
                              types[x].codigoProducto +
                              `" precioProducto ="` +
                              types[x].precio +
                              `" unidadMedida ="` +
                              types[x].unidadMedida +
                              `" foto="` +
                              types[x].foto +
                              `"><i class="fas fa-heart"></i></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </div>
                                            <div class="col" id="footButtons">
                                                      
                                            </div>
                                        </div>`;
                          }
                        } else {
                          if (descuento != 0) {
                            var precioDescuento = precio - precioF;
                            var div =
                              `<div class="col-lg-12 col-md-12 col-sm-12" id="contBusqueda">
                                            <div id="svgOff" >
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                <!--- Etiqueta Oferta de Promoción -->
                                                    <g>
                                                        <!--- Etiqueta -->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                        <!--- Texto -->
                                                        <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                              precio.toFixed(2) +
                              `</text>  
                                                    </g>
                                                <!--- Etiqueta Superior triangular -->
                                                    <g>  
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                        <!--- Texto triángulo -->  
                                                        <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                              descuento +
                              `</text>
                                                        <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                    </g>   
                                                </svg>
                                            </div>
                                            <div id="imgName" style="margin-bottom:15px">
                                                <center>
                                                    <img src="` +
                              types[x].foto +
                              `" alt="" style="width:80%; height:40%;">
                                                </center>
                                                <label id="nameProducto">` +
                              types[x].descripcion +
                              `</label>
                                            </div>
                                            <span type="text" style="font-size:15px;color:orange;" >$ ` +
                              precioDescuento.toFixed(2) +
                              `</span>
                                            <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                              types[x].valorMedida +
                              `</span>
                                            <br>
                                            <br>

                                            <div id="cantidad">
                                                <center>
                                                    <table id="tableBotones" >
                                                        <tr>
                                                            <th scope="col">
                                                                <input type="text" name="cantidadB[]" valor="1" maxlength="2" max="50" size="1" id="cantidadB" value="1" style="display:none"/>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="9" style="border-top:2px;">
                                                                <button type="button" class="btn btn-outline-success btnAgregarPrMasV" id="btnAgregarPrMasV" idProducto ="` +
                              types[x].idMvendido +
                              `" descripcion="` +
                              types[x].descripcion +
                              `" codigoProducto ="` +
                              types[x].codigoProducto +
                              `" precioProducto ="` +
                              precio.toFixed(2) +
                              `" unidadMedida ="` +
                              types[x].unidadMedida +
                              `" foto="` +
                              types[x].foto +
                              `" precioDescuento="` +
                              precioF.toFixed(2) +
                              `" descuento="` +
                              types[x].descuento +
                              `">Agregar</button>

                                                            </td>
                                                            <td colspan="3" style="border-top:2px;">
                                                                <button style = "margin-top:0%;margin-right: 2px;" type="button" id="btnCorazon" class="btnCorazon" idProducto ="` +
                              types[x].idMvendido +
                              `" descripcion="` +
                              types[x].descripcion +
                              `" codigoProducto ="` +
                              types[x].codigoProducto +
                              `" precioProducto ="` +
                              types[x].precio +
                              `" unidadMedida ="` +
                              types[x].unidadMedida +
                              `" foto="` +
                              types[x].foto +
                              `"><i class="fas fa-heart"></i></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </div>
                                            <div class="col" id="footButtons">
                                                  
                                            </div>
                                        </div>`;
                          } else {
                            var precioDescuento = precio;
                            var div =
                              `<div class="col-lg-12 col-md-12 col-sm-12" id="contBusqueda">
                                            <div id="svgOff" style="display:none;">
                                                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                <!--- Etiqueta Oferta de Promoción -->
                                                    <g>
                                                        <!--- Etiqueta -->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                        <!--- Texto -->
                                                        <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                              precio.toFixed(2) +
                              `</text>  
                                                    </g>
                                                <!--- Etiqueta Superior triangular -->
                                                    <g>  
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                        <!--- Texto triángulo -->  
                                                        <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                              descuento +
                              `</text>
                                                        <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                    </g>   
                                                </svg>
                                            </div>
                                            <div id="imgName" style="margin-bottom:15px">
                                                <center>
                                                    <img src="` +
                              types[x].foto +
                              `" alt="" style="width:80%; height:40%;">
                                                </center>
                                                <label id="nameProducto">` +
                              types[x].descripcion +
                              `</label>
                                            </div>
                                            <span type="text" style="font-size:15px;color:orange;" >$ ` +
                              precioDescuento.toFixed(2) +
                              `</span>
                                            <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                              types[x].valorMedida +
                              `</span>
                                            <br>
                                            <br>

                                            <div id="cantidad">
                                                <center>
                                                    <table id="tableBotones" >
                                                        <tr>
                                                            <th scope="col">
                                                                <input type="text" name="cantidadB[]" valor="1" maxlength="2" max="50" size="1" id="cantidadB" value="1" style="display:none"/>
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="9" style="border-top:2px;">
                                                                <button type="button" class="btn btn-outline-success btnAgregarPrMasV" id="btnAgregarPrMasV" idProducto ="` +
                              types[x].idMvendido +
                              `" descripcion="` +
                              types[x].descripcion +
                              `" codigoProducto ="` +
                              types[x].codigoProducto +
                              `" precioProducto ="` +
                              precio.toFixed(2) +
                              `" unidadMedida ="` +
                              types[x].unidadMedida +
                              `" foto="` +
                              types[x].foto +
                              `" precioDescuento="` +
                              precioF.toFixed(2) +
                              `" descuento="` +
                              types[x].descuento +
                              `">Agregar</button>
                                                            </td>
                                                            <td colspan="3" style="border-top:2px;">
                                                                <button style = "margin-top:0%;margin-right: 2px;" type="button" id="btnCorazon" class="btnCorazon" idProducto ="` +
                              types[x].idMvendido +
                              `" descripcion="` +
                              types[x].descripcion +
                              `" codigoProducto ="` +
                              types[x].codigoProducto +
                              `" precioProducto ="` +
                              types[x].precio +
                              `" unidadMedida ="` +
                              types[x].unidadMedida +
                              `" foto="` +
                              types[x].foto +
                              `"><i class="fas fa-heart"></i></button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </center>
                                            </div>
                                            <div class="col" id="footButtons">
                                                  
                                            </div>
                                        </div>`;
                          }
                        }

                        $("#tableResultadosBusqueda").append(div);
                      }
                    } else if (data == "failed") {
                      //swal("Upss", "No se encontraron los resultados para tu busqueda.", "info");
                      //window.location.href = "categoriasMarcas.html";
                    }
                  },
                });
              }
            }
          }
          /*************/
        },
      });
    } else {
    }
    return false;
  });
  /***********FAVORITOS BUSCADOR******************/

  /*****************BUSCADOR DE PRODUCTOS**************/
  var data = localStorage.getItem("ProductosAdd");
  array = JSON.parse(data);
  var productos = array;

  function agregar() {
    productos.push(nuevoProducto);
    localStorage.ProductosAdd = JSON.stringify(productos);
  }

  /*======================
    AGREGAR A CARITO PRODUCTOS SOLICITADOS
    ========================*/
  $("#regresar").click(function () {
    //localStorage.UltimaLista = localStorage.ProductosAdd;
  });
  /*=======================
    AGREGAR A FAVORITOS PENDIENTE
    =========================*/
  $("#contenedor2").on("click", ".favoritos", function () {
    var idCliente = localStorage.idCliente;
    var idProducto = localStorage.idProducto;
    var codigoProducto = localStorage.codigoProducto;
    var precioElegido = localStorage.precioElegido;
    var unidadElegida = localStorage.unidadElegida;
    var dataString =
      "idProducto=" +
      idProducto +
      "&idCliente=" +
      idCliente +
      "&codigoProducto=" +
      codigoProducto +
      "&precioElegido=" +
      precioElegido +
      "&unidadElegida=" +
      unidadElegida +
      "&addFavoritos=";
    if (($.trim(idProducto).length > 0) & ($.trim(idCliente).length > 0)) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          $("#favoritos").val("Procesando Solicitud...");
        },
        success: function (data) {
          if (data == "failed") {
            swal("Algo Salio Mal...", "Error al Procesar Solicitud", "error");
          } else if (data == "success") {
            swal("Exito!", "Producto agregado a mis favoritos", "success");
          } else if (data == "exist") {
            swal(
              "Upss...",
              "El producto ya se encuentra agregado a mis favoritos.",
              "info"
            );
          }
        },
      });
    } else {
      swal("Alto!", "No Se ha seleccionado ningún Producto", "info");
    }
    return false;
  });
  /**
   *AGREGAR A FAVORITOS CON EL BOTON DE CORAZON EN NEGRO
   *DESDE LA TABLA DE PRODUCTOS MAS VENDIDOS
   */
  $("#productos").on("click", ".btnCorazon", function () {
    var idCliente = localStorage.idCliente;
    var idProducto = $(this).attr("idProducto");
    var codigoProducto = $(this).attr("codigoProducto");
    var precioElegido = $(this).attr("precioProducto");
    var unidadElegida = $(this).attr("unidadMedida");
    var dataString =
      "idProducto=" +
      idProducto +
      "&idCliente=" +
      idCliente +
      "&codigoProducto=" +
      codigoProducto +
      "&precioElegido=" +
      precioElegido +
      "&unidadElegida=" +
      unidadElegida +
      "&addFavoritos=";
    if (($.trim(idProducto).length > 0) & ($.trim(idCliente).length > 0)) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {},
        success: function (data) {
          if (data == "failed") {
            swal("Error al eliminar", "", "error");
          } else if (data == "failed") {
            swal("Algo Salio Mal...", "Error al Agregar a Favoritos", "error");
          } else if (data == "success") {
            var idCliente = localStorage.idCliente;
            var dataStringM = "idCliente=" + idCliente + "&listarMasVendido=";
            //swal("Exito!", "Producto agregado a mis favoritos", "success");
            if ($.trim(idCliente).length > 0) {
              $.ajax({
                type: "POST",
                url: url,
                data: dataStringM,
                crossDomain: true,
                cache: false,
                beforeSend: function () {},
                success: function (data) {
                  if (data != "failed") {
                    localStorage.arregloMasVendido = data;
                    var json = localStorage.arregloMasVendido;
                    var types = JSON.parse(json);

                    var idClient = localStorage.idCliente;

                    $("#productos").html("");

                    for (x = 0; x < types.length; x++) {
                      var precio = types[x].precio * 1;
                      var descuento = types[x].descuento * 1;
                      var precioF = (precio * descuento) / 100;
                      // if (descuento != 0) {

                      //     var precioDescuento = precio - precioF;
                      //     //alert(precioDescuento);
                      // }else{
                      //     var precioDescuento = precio;
                      //     //alert(precioDescuento);
                      // }

                      var idProductoF = types[x].idProducto;
                      var idClientF = types[x].idCliente;

                      if (types[x].favorito == 1 && idClient == idClientF) {
                        var precioDescuento = precio - precioF;
                        if (descuento != 0) {
                          var tr =
                            `
                                                <table id="tableProductos">
                                                  <tr>
                                                    <td>
                                                    <div id="svgOff" >
                                                        <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                        <!--- Etiqueta Oferta de Promoción -->
                                                            <g>
                                                              <!--- Etiqueta -->
                                                              <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                              <!--- Texto -->
                                                              <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                            precio.toFixed(2) +
                            `</text>  
                                                            </g>
                                                        <!--- Etiqueta Superior triangular -->
                                                            <g>  
                                                              <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                              <!--- Texto triángulo -->  
                                                              <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                            descuento +
                            `</text>
                                                              <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                            </g>   
                                                        </svg>
                                                    </div>
                                                      <center>
                                                          <img src="` +
                            types[x].foto +
                            `" alt="" style="width:30%; height:10%;">
                                                      </center>
                                                      <p style="margin-left:10%;width:90%;height:25px;">
                                                        <span type="text" id="nameProductoS">` +
                            types[x].descripcion +
                            `</span>
                                                      </p>

                                                      <p style="margin-left:10%">
                                                      <span type="text" style="font-size:15px;color:orange;" >$ ` +
                            precioDescuento.toFixed(2) +
                            `</span>
                                                      <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                            types[x].valorMedida +
                            `</span>
                                                      </p>
                                                      <button type="button" id="btnCorazonRed" class="btnCorazonRed" idProductoF ="` +
                            types[x].idMvendido +
                            `"><i class="fas fa-heart"></i></button>
                                                       
                                                       <input type="hidden" name="cantidadProd[]" valor="1" maxlength="2" max="50" size="1" id="cantidadProd" style="" class="" placeholder="" value="1"/>
                                                       <button type="button" class="btn btn-success btnAgregaraCarro" id="btnAgregaraCarro" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `" precioDescuento="` +
                            precioF.toFixed(2) +
                            `" descuento="` +
                            descuento +
                            `">Agregar <i class="fas fa-shopping-cart"></i></button>
                                                      </td>
                                                 </tr>
                                                </table>`;
                        } else {
                          var precioDescuento = precio;
                          var tr =
                            `
                                                <table id="tableProductos">
                                                  <tr>
                                                    <td>
                                                        <div id="svgOff" style="display:none">
                                                            <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                            <!--- Etiqueta Oferta de Promoción -->
                                                                <g>
                                                                  <!--- Etiqueta -->
                                                                  <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                                  <!--- Texto -->
                                                                  <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                            precio.toFixed(2) +
                            `</text>  
                                                                </g>
                                                            <!--- Etiqueta Superior triangular -->
                                                                <g>  
                                                                  <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                                  <!--- Texto triángulo -->  
                                                                  <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                            descuento +
                            `</text>
                                                                  <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                                </g>   
                                                            </svg>
                                                        </div>
                                                      <center>
                                                          <img src="` +
                            types[x].foto +
                            `" alt="" style="width:30%; height:10%;">
                                                      </center>
                                                      <p style="margin-left:10%;width:90%;height:25px;">
                                                        <span type="text" id="nameProductoS">` +
                            types[x].descripcion +
                            `</span>
                                                      </p>

                                                      <p style="margin-left:10%">
                                                      <span type="text" style="font-size:15px;color:orange;" >$ ` +
                            precioDescuento.toFixed(2) +
                            `</span>
                                                      <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                            types[x].valorMedida +
                            `</span>
                                                      </p>
                                                      <button type="button" id="btnCorazonRed" class="btnCorazonRed" idProductoF ="` +
                            types[x].idMvendido +
                            `"><i class="fas fa-heart"></i></button>
                                                       
                                                       <input type="hidden" name="cantidadProd[]" valor="1" maxlength="2" max="50" size="1" id="cantidadProd" style="" class="" placeholder="" value="1"/>
                                                       <button type="button" class="btn btn-success btnAgregaraCarro" id="btnAgregaraCarro" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `" precioDescuento="` +
                            precioF.toFixed(2) +
                            `" descuento="` +
                            descuento +
                            `">Agregar <i class="fas fa-shopping-cart"></i></button>
                                                      </td>
                                                 </tr>
                                                </table>`;
                        }
                      } else {
                        if (descuento != 0) {
                          var precioDescuento = precio - precioF;
                          var tr =
                            `
                                                <table id="tableProductos">
                                                  <tr>
                                                    <td>
                                                        <div id="svgOff">
                                                            <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                            <!--- Etiqueta Oferta de Promoción -->
                                                                <g>
                                                                  <!--- Etiqueta -->
                                                                  <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                                  <!--- Texto -->
                                                                  <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                            precio.toFixed(2) +
                            `</text>  
                                                                </g>
                                                            <!--- Etiqueta Superior triangular -->
                                                                <g>  
                                                                  <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                                  <!--- Texto triángulo -->  
                                                                  <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                            descuento +
                            `</text>
                                                                  <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                                </g>   
                                                            </svg>
                                                        </div>
                                                      <center>
                                                          <img src="` +
                            types[x].foto +
                            `" alt="" style="width:30%; height:10%;">
                                                      </center>
                                                      <p style="margin-left:10%;width:90%;height:25px;">
                                                        <span type="text" id="nameProductoS">` +
                            types[x].descripcion +
                            `</span>
                                                      </p>

                                                      <p style="margin-left:10%">
                                                      <span type="text" style="font-size:15px;color:orange;" >$ ` +
                            precioDescuento.toFixed(2) +
                            `</span>
                                                      <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                            types[x].valorMedida +
                            `</span>
                                                      </p>
                                                      <button type="button" id="btnCorazon" class="btnCorazon" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `"><i class="fas fa-heart"></i></button>
                                                      <input type="hidden" name="cantidadProd[]" valor="1" maxlength="2" max="50" size="1" id="cantidadProd" style="" class="" placeholder="" value="1"/>
                                                         <button type="button" class="btn btn-success btnAgregaraCarro" id="btnAgregaraCarro" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `" precioDescuento="` +
                            precioF.toFixed(2) +
                            `" descuento="` +
                            descuento +
                            `">Agregar <i class="fas fa-shopping-cart"></i></button>                           
                                                      </td>
                                                 </tr>
                                                </table>`;
                        } else {
                          var precioDescuento = precio;
                          var tr =
                            `
                                                <table id="tableProductos">
                                                  <tr>
                                                    <td>
                                                        <div id="svgOff" style="display:none">
                                                            <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                            <!--- Etiqueta Oferta de Promoción -->
                                                                <g>
                                                                  <!--- Etiqueta -->
                                                                  <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                                  <!--- Texto -->
                                                                  <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                            precio.toFixed(2) +
                            `</text>  
                                                                </g>
                                                            <!--- Etiqueta Superior triangular -->
                                                                <g>  
                                                                  <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                                  <!--- Texto triángulo -->  
                                                                  <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                            descuento +
                            `</text>
                                                                  <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                                </g>   
                                                            </svg>
                                                        </div>
                                                      <center>
                                                          <img src="` +
                            types[x].foto +
                            `" alt="" style="width:30%; height:10%;">
                                                      </center>
                                                      <p style="margin-left:10%;width:90%;height:25px;">
                                                        <span type="text" id="nameProductoS">` +
                            types[x].descripcion +
                            `</span>
                                                      </p>

                                                      <p style="margin-left:10%">
                                                      <span type="text" style="font-size:15px;color:orange;" >$ ` +
                            precioDescuento.toFixed(2) +
                            `</span>
                                                      <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                            types[x].valorMedida +
                            `</span>
                                                      </p>
                                                      <button type="button" id="btnCorazon" class="btnCorazon" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `"><i class="fas fa-heart"></i></button>
                                                      <input type="hidden" name="cantidadProd[]" valor="1" maxlength="2" max="50" size="1" id="cantidadProd" style="" class="" placeholder="" value="1"/>
                                                         <button type="button" class="btn btn-success btnAgregaraCarro" id="btnAgregaraCarro" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `" precioDescuento="` +
                            precioF.toFixed(2) +
                            `" descuento="` +
                            descuento +
                            `">Agregar <i class="fas fa-shopping-cart"></i></button>                           
                                                      </td>
                                                 </tr>
                                                </table>`;
                        }
                      }
                      $("#productos").append(tr);
                    }
                  } else if (data == "failed") {
                    swal("Upss", "No hay favoritos agregados.", "info");
                    //window.location.href = "categoriasMarcas.html";
                  }
                },
              });
            }
          } else if (data == "exist") {
            swal(
              "Upss...",
              "El producto ya se encuentra agregado a mis favoritos.",
              "info"
            );
          }
        },
      });
    } else {
      swal("Alto!", "No Se ha seleccionado ningún Producto", "info");
    }
    return false;
  });
  /**
   * QUITAR FAVORITOS CON BOTON CON CORAZON ROJO
   */
  $("#productos").on("click", ".btnCorazonRed", function () {
    var idCliente = localStorage.idCliente;
    var idProductoF = $(this).attr("idProductoF");
    var dataString =
      "idProductoF=" +
      idProductoF +
      "&idCliente=" +
      idCliente +
      "&deleteFavoritosRed=";

    if (($.trim(idProductoF).length > 0) & ($.trim(idCliente).length > 0)) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {},
        success: function (data) {
          if (data == "failed") {
            swal("Error al eliminar", "", "error");
          } else if (data == "success") {
            var idCliente = localStorage.idCliente;
            var dataStringM = "idCliente=" + idCliente + "&listarMasVendido=";
            //swal("Exito!", "Producto agregado a mis favoritos", "success");
            if ($.trim(idCliente).length > 0) {
              $.ajax({
                type: "POST",
                url: url,
                data: dataStringM,
                crossDomain: true,
                cache: false,
                beforeSend: function () {},
                success: function (data) {
                  if (data != "failed") {
                    localStorage.arregloMasVendido = data;
                    var json = localStorage.arregloMasVendido;
                    var types = JSON.parse(json);

                    var idClient = localStorage.idCliente;
                    $("#productos").html("");

                    for (x = 0; x < types.length; x++) {
                      var precio = types[x].precio * 1;
                      var descuento = types[x].descuento * 1;
                      var precioF = (precio * descuento) / 100;

                      var idProductoF = types[x].idProducto;
                      var idClientF = types[x].idCliente;
                      //console.log(idClientF);

                      if (types[x].favorito == 1 && idClient == idClientF) {
                        var precioDescuento = precio - precioF;
                        if (descuento != 0) {
                          var tr =
                            `
                                                <table id="tableProductos">
                                                  <tr>
                                                    <td>
                                                    <div id="svgOff" >
                                                        <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                        <!--- Etiqueta Oferta de Promoción -->
                                                            <g>
                                                              <!--- Etiqueta -->
                                                              <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                              <!--- Texto -->
                                                              <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                            precio.toFixed(2) +
                            `</text>  
                                                            </g>
                                                        <!--- Etiqueta Superior triangular -->
                                                            <g>  
                                                              <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                              <!--- Texto triángulo -->  
                                                              <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                            descuento +
                            `</text>
                                                              <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                            </g>   
                                                        </svg>
                                                    </div>
                                                      <center>
                                                          <img src="` +
                            types[x].foto +
                            `" alt="" style="width:30%; height:10%;">
                                                      </center>
                                                      <p style="margin-left:10%;width:90%;height:25px;">
                                                        <span type="text" id="nameProductoS">` +
                            types[x].descripcion +
                            `</span>
                                                      </p>

                                                      <p style="margin-left:10%">
                                                      <span type="text" style="font-size:15px;color:orange;" >$ ` +
                            precioDescuento.toFixed(2) +
                            `</span>
                                                      <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                            types[x].valorMedida +
                            `</span>
                                                      </p>
                                                      <button type="button" id="btnCorazonRed" class="btnCorazonRed" idProductoF ="` +
                            types[x].idMvendido +
                            `"><i class="fas fa-heart"></i></button>
                                                       
                                                       <input type="hidden" name="cantidadProd[]" valor="1" maxlength="2" max="50" size="1" id="cantidadProd" style="" class="" placeholder="" value="1"/>
                                                       <button type="button" class="btn btn-success btnAgregaraCarro" id="btnAgregaraCarro" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `" precioDescuento="` +
                            precioF.toFixed(2) +
                            `" descuento="` +
                            descuento +
                            `">Agregar <i class="fas fa-shopping-cart"></i></button>
                                                      </td>
                                                 </tr>
                                                </table>`;
                        } else {
                          var precioDescuento = precio;
                          var tr =
                            `
                                                <table id="tableProductos">
                                                  <tr>
                                                    <td>
                                                        <div id="svgOff" style="display:none">
                                                            <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                            <!--- Etiqueta Oferta de Promoción -->
                                                                <g>
                                                                  <!--- Etiqueta -->
                                                                  <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                                  <!--- Texto -->
                                                                  <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                            precio.toFixed(2) +
                            `</text>  
                                                                </g>
                                                            <!--- Etiqueta Superior triangular -->
                                                                <g>  
                                                                  <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                                  <!--- Texto triángulo -->  
                                                                  <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                            descuento +
                            `</text>
                                                                  <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                                </g>   
                                                            </svg>
                                                        </div>
                                                      <center>
                                                          <img src="` +
                            types[x].foto +
                            `" alt="" style="width:30%; height:10%;">
                                                      </center>
                                                      <p style="margin-left:10%;width:90%;height:25px;">
                                                        <span type="text" id="nameProductoS">` +
                            types[x].descripcion +
                            `</span>
                                                      </p>

                                                      <p style="margin-left:10%">
                                                      <span type="text" style="font-size:15px;color:orange;" >$ ` +
                            precioDescuento.toFixed(2) +
                            `</span>
                                                      <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                            types[x].valorMedida +
                            `</span>
                                                      </p>
                                                      <button type="button" id="btnCorazonRed" class="btnCorazonRed" idProductoF ="` +
                            types[x].idMvendido +
                            `"><i class="fas fa-heart"></i></button>
                                                       
                                                       <input type="hidden" name="cantidadProd[]" valor="1" maxlength="2" max="50" size="1" id="cantidadProd" style="" class="" placeholder="" value="1"/>
                                                       <button type="button" class="btn btn-success btnAgregaraCarro" id="btnAgregaraCarro" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `" precioDescuento="` +
                            precioF.toFixed(2) +
                            `" descuento="` +
                            descuento +
                            `">Agregar <i class="fas fa-shopping-cart"></i></button>
                                                      </td>
                                                 </tr>
                                                </table>`;
                        }
                      } else {
                        if (descuento != 0) {
                          var precioDescuento = precio - precioF;
                          var tr =
                            `
                                                <table id="tableProductos">
                                                  <tr>
                                                    <td>
                                                        <div id="svgOff">
                                                            <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                            <!--- Etiqueta Oferta de Promoción -->
                                                                <g>
                                                                  <!--- Etiqueta -->
                                                                  <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                                  <!--- Texto -->
                                                                  <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                            precio.toFixed(2) +
                            `</text>  
                                                                </g>
                                                            <!--- Etiqueta Superior triangular -->
                                                                <g>  
                                                                  <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                                  <!--- Texto triángulo -->  
                                                                  <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                            descuento +
                            `</text>
                                                                  <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                                </g>   
                                                            </svg>
                                                        </div>
                                                      <center>
                                                          <img src="` +
                            types[x].foto +
                            `" alt="" style="width:30%; height:10%;">
                                                      </center>
                                                      <p style="margin-left:10%;width:90%;height:25px;">
                                                        <span type="text" id="nameProductoS">` +
                            types[x].descripcion +
                            `</span>
                                                      </p>

                                                      <p style="margin-left:10%">
                                                      <span type="text" style="font-size:15px;color:orange;" >$ ` +
                            precioDescuento.toFixed(2) +
                            `</span>
                                                      <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                            types[x].valorMedida +
                            `</span>
                                                      </p>
                                                      <button type="button" id="btnCorazon" class="btnCorazon" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `"><i class="fas fa-heart"></i></button>
                                                      <input type="hidden" name="cantidadProd[]" valor="1" maxlength="2" max="50" size="1" id="cantidadProd" style="" class="" placeholder="" value="1"/>
                                                         <button type="button" class="btn btn-success btnAgregaraCarro" id="btnAgregaraCarro" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `" precioDescuento="` +
                            precioF.toFixed(2) +
                            `" descuento="` +
                            descuento +
                            `">Agregar <i class="fas fa-shopping-cart"></i></button>                           
                                                      </td>
                                                 </tr>
                                                </table>`;
                        } else {
                          var precioDescuento = precio;
                          var tr =
                            `
                                                <table id="tableProductos">
                                                  <tr>
                                                    <td>
                                                        <div id="svgOff" style="display:none">
                                                            <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                            <!--- Etiqueta Oferta de Promoción -->
                                                                <g>
                                                                  <!--- Etiqueta -->
                                                                  <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                                  <!--- Texto -->
                                                                  <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                            precio.toFixed(2) +
                            `</text>  
                                                                </g>
                                                            <!--- Etiqueta Superior triangular -->
                                                                <g>  
                                                                  <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                                  <!--- Texto triángulo -->  
                                                                  <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                            descuento +
                            `</text>
                                                                  <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                                </g>   
                                                            </svg>
                                                        </div>
                                                      <center>
                                                          <img src="` +
                            types[x].foto +
                            `" alt="" style="width:30%; height:10%;">
                                                      </center>
                                                      <p style="margin-left:10%;width:90%;height:25px;">
                                                        <span type="text" id="nameProductoS">` +
                            types[x].descripcion +
                            `</span>
                                                      </p>

                                                      <p style="margin-left:10%">
                                                      <span type="text" style="font-size:15px;color:orange;" >$ ` +
                            precioDescuento.toFixed(2) +
                            `</span>
                                                      <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                            types[x].valorMedida +
                            `</span>
                                                      </p>
                                                      <button type="button" id="btnCorazon" class="btnCorazon" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `"><i class="fas fa-heart"></i></button>
                                                      <input type="hidden" name="cantidadProd[]" valor="1" maxlength="2" max="50" size="1" id="cantidadProd" style="" class="" placeholder="" value="1"/>
                                                         <button type="button" class="btn btn-success btnAgregaraCarro" id="btnAgregaraCarro" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `" precioDescuento="` +
                            precioF.toFixed(2) +
                            `" descuento="` +
                            descuento +
                            `">Agregar <i class="fas fa-shopping-cart"></i></button>                           
                                                      </td>
                                                 </tr>
                                                </table>`;
                        }
                      }
                      $("#productos").append(tr);
                    }
                  } else if (data == "failed") {
                    swal("Upss", "No hay favoritos agregados.", "info");
                    //window.location.href = "categoriasMarcas.html";
                  }
                },
              });
            }
          }
          /*************/
        },
      });
    } else {
    }
    return false;
  });
  /**
   *AGREGAR A FAVORITOS CON EL BOTON DE CORAZON EN NEGRO
   *DESDE LA TABLA DE PRODUCTOS MAS VENDIDOS
   */
  $("#productosMasBuscados").on("click", ".btnCorazon", function () {
    var idCliente = localStorage.idCliente;
    var idProducto = $(this).attr("idProducto");
    var codigoProducto = $(this).attr("codigoProducto");
    var precioElegido = $(this).attr("precioProducto");
    var unidadElegida = $(this).attr("unidadMedida");
    var dataString =
      "idProducto=" +
      idProducto +
      "&idCliente=" +
      idCliente +
      "&codigoProducto=" +
      codigoProducto +
      "&precioElegido=" +
      precioElegido +
      "&unidadElegida=" +
      unidadElegida +
      "&addFavoritos=";
    if (($.trim(idProducto).length > 0) & ($.trim(idCliente).length > 0)) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {},
        success: function (data) {
          if (data == "failed") {
            swal("Error al eliminar", "", "error");
          } else if (data == "failed") {
            swal("Algo Salio Mal...", "Error al Agregar a Favoritos", "error");
          } else if (data == "success") {
            var idCliente = localStorage.idCliente;
            var dataStringM = "idCliente=" + idCliente + "&listarMasBuscado=";
            //swal("Exito!", "Producto agregado a mis favoritos", "success");
            if ($.trim(idCliente).length > 0) {
              $.ajax({
                type: "POST",
                url: url,
                data: dataStringM,
                crossDomain: true,
                cache: false,
                beforeSend: function () {},
                success: function (data) {
                  if (data != "failed") {
                    localStorage.arregloMasBuscado = data;
                    var json = localStorage.arregloMasBuscado;
                    var types = JSON.parse(json);

                    $("#productosMasBuscados").html("");

                    for (x = 0; x < types.length; x++) {
                      var precio = types[x].precio * 1;
                      var descuento = types[x].descuento * 1;
                      var precioF = (precio * descuento) / 100;

                      if (types[x].favorito == 1) {
                        if (descuento != 0) {
                          var precioDescuento = precio - precioF;
                          var tr =
                            `
                                            <table id="tableProductosBus">
                                              <tr>
                                                <td>
                                                  <div id="svgOff">
                                                    <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                      <!--- Etiqueta Oferta de Promoción -->
                                                      <g>
                                                        <!--- Etiqueta -->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                        <!--- Texto -->
                                                        <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                            precio.toFixed(2) +
                            `</text>  
                                                      </g>
                                                      <!--- Etiqueta Superior triangular -->
                                                      <g>  
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                        <!--- Texto triángulo -->  
                                                        <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                            descuento +
                            `</text>
                                                        <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                      </g>   
                                                    </svg>
                                                  </div>

                                                  <center>
                                                    <img src="` +
                            types[x].foto +
                            `" alt="" style="width:30%; height:10%;">
                                                  </center>
                                                  <p style="margin-left:10%;width:90%;height:25px;">
                                                    <span type="text" id="nameProductoS">` +
                            types[x].descripcion +
                            `</span>
                                                  </p>

                                                  <p style="margin-left:10%">
                                                    <span type="text" style="font-size:15px;color:orange;" >$ ` +
                            precioDescuento.toFixed(2) +
                            `</span>
                                                    <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                            types[x].valorMedida +
                            `</span>
                                                  </p>
                                                  <button type="button" id="btnCorazonRed" class="btnCorazonRed" idProductoF ="` +
                            types[x].idMvendido +
                            `"><i class="fas fa-heart"></i></button>
                                                  <input type="hidden" name="cantidadProd[]" valor="1" maxlength="2" max="50" size="1" id="cantidadProd" style="" class="" placeholder="" value="1"/>

                                                  <button type="button" class="btn btn-success btnAgregaraCarroBus" id="btnAgregaraCarroBus" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `" precioDescuento="` +
                            precioF.toFixed(2) +
                            `" descuento="` +
                            descuento +
                            `">Agregar <i class="fas fa-shopping-cart"></i></button>
                                                </td>
                                              </tr>
                                            </table>`;
                        } else {
                          var precioDescuento = precio;
                          var tr =
                            `
                                              <table id="tableProductosBus">
                                                <tr>
                                                  <td>
                                                    <div id="svgOff" style="display:none">
                                                      <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                        <!--- Etiqueta Oferta de Promoción -->
                                                        <g>
                                                          <!--- Etiqueta -->
                                                          <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                          <!--- Texto -->
                                                          <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                            precio.toFixed(2) +
                            `</text>  
                                                        </g>
                                                        <!--- Etiqueta Superior triangular -->
                                                        <g>  
                                                          <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                          <!--- Texto triángulo -->  
                                                          <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                            descuento +
                            `</text>
                                                          <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                        </g>   
                                                      </svg>
                                                    </div>

                                                    <center>
                                                      <img src="` +
                            types[x].foto +
                            `" alt="" style="width:30%; height:10%;">
                                                    </center>
                                                    <p style="margin-left:10%;width:90%;height:25px;">
                                                      <span type="text" id="nameProductoS">` +
                            types[x].descripcion +
                            `</span>
                                                    </p>

                                                    <p style="margin-left:10%">
                                                      <span type="text" style="font-size:15px;color:orange;" >$ ` +
                            precioDescuento.toFixed(2) +
                            `</span>
                                                      <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                            types[x].valorMedida +
                            `</span>
                                                    </p>
                                                    <button type="button" id="btnCorazonRed" class="btnCorazonRed" idProductoF ="` +
                            types[x].idMvendido +
                            `"><i class="fas fa-heart"></i></button>
                                                    <input type="hidden" name="cantidadProd[]" valor="1" maxlength="2" max="50" size="1" id="cantidadProd" style="" class="" placeholder="" value="1"/>

                                                    <button type="button" class="btn btn-success btnAgregaraCarroBus" id="btnAgregaraCarroBus" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `" precioDescuento="` +
                            precioF.toFixed(2) +
                            `" descuento="` +
                            descuento +
                            `">Agregar <i class="fas fa-shopping-cart"></i></button>
                                                  </td>
                                                </tr>
                                              </table>`;
                        }
                      } else {
                        if (descuento != 0) {
                          var precioDescuento = precio - precioF;
                          var tr =
                            `
                                            <table id="tableProductosBus">
                                              <tr>
                                                <td>
                                                  <div id="svgOff">
                                                    <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                      <!--- Etiqueta Oferta de Promoción -->
                                                      <g>
                                                        <!--- Etiqueta -->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                        <!--- Texto -->
                                                        <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                            precio.toFixed(2) +
                            `</text>  
                                                      </g>
                                                      <!--- Etiqueta Superior triangular -->
                                                      <g>  
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                        <!--- Texto triángulo -->  
                                                        <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                            descuento +
                            `</text>
                                                        <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                      </g>   
                                                    </svg>
                                                  </div>
                                                  <center>
                                                    <img src="` +
                            types[x].foto +
                            `" alt="" style="width:30%; height:10%;">
                                                  </center>
                                                  <p style="margin-left:10%;width:90%;height:25px;">
                                                    <span type="text" id="nameProductoS">` +
                            types[x].descripcion +
                            `</span>
                                                  </p>

                                                  <p style="margin-left:10%">
                                                    <span type="text" style="font-size:15px;color:orange;" >$ ` +
                            precioDescuento.toFixed(2) +
                            `</span>
                                                    <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                            types[x].valorMedida +
                            `</span>
                                                  </p>
                                                  <button type="button" id="btnCorazon" class="btnCorazon" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `"><i class="fas fa-heart"></i></button>

                                                  <input type="hidden" name="cantidadProd[]" valor="1" maxlength="2" max="50" size="1" id="cantidadProd" style="" class="" placeholder="" value="1"/>

                                                  <button type="button" class="btn btn-success btnAgregaraCarroBus" id="btnAgregaraCarroBus" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `" precioDescuento="` +
                            precioF.toFixed(2) +
                            `" descuento="` +
                            descuento +
                            `">Agregar <i class="fas fa-shopping-cart"></i></button>
                                                </td>    
                                              </tr>
                                            </table>`;
                        } else {
                          var precioDescuento = precio;
                          var tr =
                            `
                                            <table id="tableProductosBus">
                                              <tr>
                                                <td>
                                                  <div id="svgOff" style="display:none;">
                                                    <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                      <!--- Etiqueta Oferta de Promoción -->
                                                      <g>
                                                        <!--- Etiqueta -->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                        <!--- Texto -->
                                                        <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                            precio.toFixed(2) +
                            `</text>  
                                                      </g>
                                                      <!--- Etiqueta Superior triangular -->
                                                      <g>  
                                                        <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                        <!--- Texto triángulo -->  
                                                        <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                            descuento +
                            `</text>
                                                        <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                      </g>   
                                                    </svg>
                                                  </div>
                                                  <center>
                                                    <img src="` +
                            types[x].foto +
                            `" alt="" style="width:30%; height:10%;">
                                                  </center>
                                                  <p style="margin-left:10%;width:90%;height:25px;">
                                                    <span type="text" id="nameProductoS">` +
                            types[x].descripcion +
                            `</span>
                                                  </p>

                                                  <p style="margin-left:10%">
                                                    <span type="text" style="font-size:15px;color:orange;" >$ ` +
                            precioDescuento.toFixed(2) +
                            `</span>
                                                    <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                            types[x].valorMedida +
                            `</span>
                                                  </p>
                                                  <button type="button" id="btnCorazon" class="btnCorazon" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `"><i class="fas fa-heart"></i></button>

                                                  <input type="hidden" name="cantidadProd[]" valor="1" maxlength="2" max="50" size="1" id="cantidadProd" style="" class="" placeholder="" value="1"/>

                                                  <button type="button" class="btn btn-success btnAgregaraCarroBus" id="btnAgregaraCarroBus" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `" precioDescuento="` +
                            precioF.toFixed(2) +
                            `" descuento="` +
                            descuento +
                            `">Agregar <i class="fas fa-shopping-cart"></i></button>
                                                </td>    
                                              </tr>
                                            </table>`;
                        }
                      }

                      $("#productosMasBuscados").append(tr);
                    }
                  } else if (data == "failed") {
                    swal("Upss", "No hay favoritos agregados.", "info");
                    //window.location.href = "categoriasMarcas.html";
                  }
                },
              });
            }
          } else if (data == "exist") {
            swal(
              "Upss...",
              "El producto ya se encuentra agregado a mis favoritos.",
              "info"
            );
          }
        },
      });
    } else {
      swal("Alto!", "No Se ha seleccionado ningún Producto", "info");
    }
    return false;
  });
  /**
   * QUITAR FAVORITOS CON BOTON CON CORAZON ROJO
   */
  $("#productosMasBuscados").on("click", ".btnCorazonRed", function () {
    var idCliente = localStorage.idCliente;
    var idProductoF = $(this).attr("idProductoF");
    var dataString =
      "idProductoF=" +
      idProductoF +
      "&idCliente=" +
      idCliente +
      "&deleteFavoritosRed=";

    if (($.trim(idProductoF).length > 0) & ($.trim(idCliente).length > 0)) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {},
        success: function (data) {
          if (data == "failed") {
            swal("Error al eliminar", "", "error");
          } else if (data == "success") {
            var idCliente = localStorage.idCliente;
            var dataStringM = "idCliente=" + idCliente + "&listarMasBuscado=";
            //swal("Exito!", "Producto agregado a mis favoritos", "success");
            if ($.trim(idCliente).length > 0) {
              $.ajax({
                type: "POST",
                url: url,
                data: dataStringM,
                crossDomain: true,
                cache: false,
                beforeSend: function () {},
                success: function (data) {
                  if (data != "failed") {
                    localStorage.arregloMasBuscado = data;
                    var json = localStorage.arregloMasBuscado;
                    var types = JSON.parse(json);

                    $("#productosMasBuscados").html("");

                    for (x = 0; x < types.length; x++) {
                      var precio = types[x].precio * 1;
                      var descuento = types[x].descuento * 1;
                      var precioF = (precio * descuento) / 100;

                      if (types[x].favorito == 1) {
                        if (descuento != 0) {
                          var precioDescuento = precio - precioF;
                          var tr =
                            `
                                                <table id="tableProductosBus">
                                                  <tr>
                                                    <td>
                                                      <div id="svgOff">
                                                        <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                          <!--- Etiqueta Oferta de Promoción -->
                                                          <g>
                                                            <!--- Etiqueta -->
                                                            <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                            <!--- Texto -->
                                                            <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                            precio.toFixed(2) +
                            `</text>  
                                                          </g>
                                                          <!--- Etiqueta Superior triangular -->
                                                          <g>  
                                                            <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                            <!--- Texto triángulo -->  
                                                            <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                            descuento +
                            `</text>
                                                            <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                          </g>   
                                                        </svg>
                                                      </div>

                                                      <center>
                                                        <img src="` +
                            types[x].foto +
                            `" alt="" style="width:30%; height:10%;">
                                                      </center>
                                                      <p style="margin-left:10%;width:90%;height:25px;">
                                                        <span type="text" id="nameProductoS">` +
                            types[x].descripcion +
                            `</span>
                                                      </p>

                                                      <p style="margin-left:10%">
                                                        <span type="text" style="font-size:15px;color:orange;" >$ ` +
                            precioDescuento.toFixed(2) +
                            `</span>
                                                        <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                            types[x].valorMedida +
                            `</span>
                                                      </p>
                                                      <button type="button" id="btnCorazonRed" class="btnCorazonRed" idProductoF ="` +
                            types[x].idMvendido +
                            `"><i class="fas fa-heart"></i></button>
                                                      <input type="hidden" name="cantidadProd[]" valor="1" maxlength="2" max="50" size="1" id="cantidadProd" style="" class="" placeholder="" value="1"/>

                                                      <button type="button" class="btn btn-success btnAgregaraCarroBus" id="btnAgregaraCarroBus" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `" precioDescuento="` +
                            precioF.toFixed(2) +
                            `" descuento="` +
                            descuento +
                            `">Agregar <i class="fas fa-shopping-cart"></i></button>
                                                    </td>
                                                  </tr>
                                                </table>`;
                        } else {
                          var precioDescuento = precio;
                          var tr =
                            `
                                                  <table id="tableProductosBus">
                                                    <tr>
                                                      <td>
                                                        <div id="svgOff" style="display:none">
                                                          <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                            <!--- Etiqueta Oferta de Promoción -->
                                                            <g>
                                                              <!--- Etiqueta -->
                                                              <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                              <!--- Texto -->
                                                              <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                            precio.toFixed(2) +
                            `</text>  
                                                            </g>
                                                            <!--- Etiqueta Superior triangular -->
                                                            <g>  
                                                              <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                              <!--- Texto triángulo -->  
                                                              <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                            descuento +
                            `</text>
                                                              <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                            </g>   
                                                          </svg>
                                                        </div>

                                                        <center>
                                                          <img src="` +
                            types[x].foto +
                            `" alt="" style="width:30%; height:10%;">
                                                        </center>
                                                        <p style="margin-left:10%;width:90%;height:25px;">
                                                          <span type="text" id="nameProductoS">` +
                            types[x].descripcion +
                            `</span>
                                                        </p>

                                                        <p style="margin-left:10%">
                                                          <span type="text" style="font-size:15px;color:orange;" >$ ` +
                            precioDescuento.toFixed(2) +
                            `</span>
                                                          <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                            types[x].valorMedida +
                            `</span>
                                                        </p>
                                                        <button type="button" id="btnCorazonRed" class="btnCorazonRed" idProductoF ="` +
                            types[x].idMvendido +
                            `"><i class="fas fa-heart"></i></button>
                                                        <input type="hidden" name="cantidadProd[]" valor="1" maxlength="2" max="50" size="1" id="cantidadProd" style="" class="" placeholder="" value="1"/>

                                                        <button type="button" class="btn btn-success btnAgregaraCarroBus" id="btnAgregaraCarroBus" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `" precioDescuento="` +
                            precioF.toFixed(2) +
                            `" descuento="` +
                            descuento +
                            `">Agregar <i class="fas fa-shopping-cart"></i></button>
                                                      </td>
                                                    </tr>
                                                  </table>`;
                        }
                      } else {
                        if (descuento != 0) {
                          var precioDescuento = precio - precioF;
                          var tr =
                            `
                                                <table id="tableProductosBus">
                                                  <tr>
                                                    <td>
                                                      <div id="svgOff">
                                                        <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                          <!--- Etiqueta Oferta de Promoción -->
                                                          <g>
                                                            <!--- Etiqueta -->
                                                            <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                            <!--- Texto -->
                                                            <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                            precio.toFixed(2) +
                            `</text>  
                                                          </g>
                                                          <!--- Etiqueta Superior triangular -->
                                                          <g>  
                                                            <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                            <!--- Texto triángulo -->  
                                                            <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                            descuento +
                            `</text>
                                                            <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                          </g>   
                                                        </svg>
                                                      </div>
                                                      <center>
                                                        <img src="` +
                            types[x].foto +
                            `" alt="" style="width:30%; height:10%;">
                                                      </center>
                                                      <p style="margin-left:10%;width:90%;height:25px;">
                                                        <span type="text" id="nameProductoS">` +
                            types[x].descripcion +
                            `</span>
                                                      </p>

                                                      <p style="margin-left:10%">
                                                        <span type="text" style="font-size:15px;color:orange;" >$ ` +
                            precioDescuento.toFixed(2) +
                            `</span>
                                                        <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                            types[x].valorMedida +
                            `</span>
                                                      </p>
                                                      <button type="button" id="btnCorazon" class="btnCorazon" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `"><i class="fas fa-heart"></i></button>

                                                      <input type="hidden" name="cantidadProd[]" valor="1" maxlength="2" max="50" size="1" id="cantidadProd" style="" class="" placeholder="" value="1"/>

                                                      <button type="button" class="btn btn-success btnAgregaraCarroBus" id="btnAgregaraCarroBus" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `" precioDescuento="` +
                            precioF.toFixed(2) +
                            `" descuento="` +
                            descuento +
                            `">Agregar <i class="fas fa-shopping-cart"></i></button>
                                                    </td>    
                                                  </tr>
                                                </table>`;
                        } else {
                          var precioDescuento = precio;
                          var tr =
                            `
                                                <table id="tableProductosBus">
                                                  <tr>
                                                    <td>
                                                      <div id="svgOff" style="display:none;">
                                                        <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                          <!--- Etiqueta Oferta de Promoción -->
                                                          <g>
                                                            <!--- Etiqueta -->
                                                            <path fill-rule="evenodd" clip-rule="evenodd" class="oferta-verde" d="M0,0h41.4L100,58.6V100L0,0z"/>
                                                            <!--- Texto -->
                                                            <text x="20" y="38" transform="rotate(45 48 48)" class="texto-oferta-verde">$ ` +
                            precio.toFixed(2) +
                            `</text>  
                                                          </g>
                                                          <!--- Etiqueta Superior triangular -->
                                                          <g>  
                                                            <path fill-rule="evenodd" clip-rule="evenodd" class="triangulo" d="M100,0v59L41,0H100z"/>
                                                            <!--- Texto triángulo -->  
                                                            <text x="30" y="11" transform="rotate(45 48 48)" class="texto-triangulo">-` +
                            descuento +
                            `</text>
                                                            <text x="57" y="11" transform="rotate(45 48 48)" class="texto-descuento">%</text>
                                                          </g>   
                                                        </svg>
                                                      </div>
                                                      <center>
                                                        <img src="` +
                            types[x].foto +
                            `" alt="" style="width:30%; height:10%;">
                                                      </center>
                                                      <p style="margin-left:10%;width:90%;height:25px;">
                                                        <span type="text" id="nameProductoS">` +
                            types[x].descripcion +
                            `</span>
                                                      </p>

                                                      <p style="margin-left:10%">
                                                        <span type="text" style="font-size:15px;color:orange;" >$ ` +
                            precioDescuento.toFixed(2) +
                            `</span>
                                                        <span type="text" style="font-size:15px;color:orange; margin-left:10%;" > ` +
                            types[x].valorMedida +
                            `</span>
                                                      </p>
                                                      <button type="button" id="btnCorazon" class="btnCorazon" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `"><i class="fas fa-heart"></i></button>

                                                      <input type="hidden" name="cantidadProd[]" valor="1" maxlength="2" max="50" size="1" id="cantidadProd" style="" class="" placeholder="" value="1"/>

                                                      <button type="button" class="btn btn-success btnAgregaraCarroBus" id="btnAgregaraCarroBus" idProducto ="` +
                            types[x].idMvendido +
                            `" descripcion="` +
                            types[x].descripcion +
                            `" codigoProducto ="` +
                            types[x].codigoProducto +
                            `" precioProducto ="` +
                            types[x].precio +
                            `" unidadMedida ="` +
                            types[x].unidadMedida +
                            `" foto="` +
                            types[x].foto +
                            `" precioDescuento="` +
                            precioF.toFixed(2) +
                            `" descuento="` +
                            descuento +
                            `">Agregar <i class="fas fa-shopping-cart"></i></button>
                                                    </td>    
                                                  </tr>
                                                </table>`;
                        }
                      }
                      $("#productosMasBuscados").append(tr);
                    }
                  } else if (data == "failed") {
                    swal("Upss", "No hay favoritos agregados.", "info");
                    //window.location.href = "categoriasMarcas.html";
                  }
                },
              });
            }
          }
          /*************/
        },
      });
    } else {
    }
    return false;
  });

  //Listar mis favoritos
  $("#btnMisFavoritos").click(function () {
    var idCliente = localStorage.idCliente;
    var dataString = "idCliente=" + idCliente + "&listarFavoritos=";

    if ($.trim(idCliente).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          $("#btnMisFavoritos").val("Buscando...");
        },
        success: function (data) {
          if (data != "failed") {
            localStorage.arregloFavoritos = data;
            window.location.href = "misFavoritos.html";
          } else if (data == "failed") {
            swal("Upss", "No hay favoritos agregados.", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });
  $("#btnMisFavoritos2").click(function () {
    var idCliente = localStorage.idCliente;
    var dataString = "idCliente=" + idCliente + "&listarFavoritos=";
    if ($.trim(idCliente).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          $("#btnMisFavoritos").val("Buscando...");
        },
        success: function (data) {
          if (data != "failed") {
            localStorage.arregloFavoritos = data;
            window.location.href = "misFavoritos.html";
          } else if (data == "failed") {
            swal("Upss", "No hay favoritos agregados.", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });
  /*=======================
    QUITAR DE FAVORITOS
    =========================*/
  $("#contenedors").on("click", ".favoritosEliminar", function () {
    var idCliente = localStorage.idCliente;
    var idProducto = $(this).attr("idFavoritoEliminar");
    var idProductoF = $(this).attr("idProductoF");
    var dataString =
      "idProducto=" +
      idProducto +
      "&idProductoF=" +
      idProductoF +
      "&idCliente=" +
      idCliente +
      "&deleteFavoritos=";

    if (($.trim(idProducto).length > 0) & ($.trim(idCliente).length > 0)) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          $("#favoritosEliminar").val("Procesando Solicitud...");
        },
        success: function (data) {
          if (data == "failed") {
            swal("Error al eliminar", "", "error");
          } else if (data == "success") {
            var idCliente = localStorage.idCliente;
            var dataString = "idCliente=" + idCliente + "&listarFavoritos=";
            if ($.trim(idCliente).length > 0) {
              $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function () {
                  $("#btnMisFavoritos").val("Buscando...");
                },
                success: function (data) {
                  if (data != "failed") {
                    localStorage.arregloFavoritos = data;
                    var idCliente = localStorage.idCliente;

                    var dataStringM =
                      "idCliente=" + idCliente + "&listarMasVendido=";
                    if ($.trim(idCliente).length > 0) {
                      $.ajax({
                        type: "POST",
                        url: url,
                        data: dataStringM,
                        crossDomain: true,
                        cache: false,
                        beforeSend: function () {},
                        success: function (data) {
                          if (data != "failed") {
                            localStorage.arregloMasVendido = data;
                          }
                        },
                      });
                    }
                    window.location.href = "misFavoritos.html";
                  } else if (data == "failed") {
                    var idCliente = localStorage.idCliente;

                    var dataStringM =
                      "idCliente=" + idCliente + "&listarMasVendido=";
                    if ($.trim(idCliente).length > 0) {
                      $.ajax({
                        type: "POST",
                        url: url,
                        data: dataStringM,
                        crossDomain: true,
                        cache: false,
                        beforeSend: function () {},
                        success: function (data) {
                          if (data != "failed") {
                            localStorage.arregloMasVendido = data;
                          }
                        },
                      });
                    }

                    swal({
                      title: "Upss...",
                      text: "Ya No hay favoritos agregados.!",
                      icon: "info",
                      buttons: {
                        default: "Ok!",
                      },
                      dangerMode: true,
                    }).then((willDelete) => {
                      if (willDelete) {
                        window.location.href = "categoriasMarcas.html";
                      } else {
                      }
                    });
                    //
                  }
                },
              });
            }
          }
        },
      });
    } else {
    }
    return false;
  });

  /**
   * MOSTRAR PRODUCTOS MAS VENDIDOS
   */
  $("#btnMasVendido").click(function () {
    var idCliente = localStorage.idCliente;
    var dataString = "idCliente=" + idCliente + "&listarMasVendido=";
    if ($.trim(idCliente).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          $("#btnMasVendido").val("Buscando...");
        },
        success: function (data) {
          if (data != "failed") {
            localStorage.arregloMasVendido = data;
            window.location.href = "masVendido.html";
          } else if (data == "failed") {
            swal("Upss", "No hay Productos.", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });
  $("#btnMasVendido2").click(function () {
    var idCliente = localStorage.idCliente;
    var dataString = "idCliente=" + idCliente + "&listarMasVendido=";
    if ($.trim(idCliente).length > 0) {
      $.ajax({
        type: "POST",
        url: url,
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function () {
          $("#btnMasVendido").val("Buscando...");
        },
        success: function (data) {
          if (data != "failed") {
            localStorage.arregloMasVendido = data;
            window.location.href = "masVendido.html";
          } else if (data == "failed") {
            swal("Upss", "No hay favoritos agregados.", "info");
          }
        },
      });
    } else {
      swal("Ha Ocurrido un Error", "", "error");
    }
    return false;
  });
  //logout function
  $("#logout").click(function () {
    swal({
      title: "Cerrar sesión",
      text: "Seguro que desea Completar esta acción?",
      icon: "warning",
      buttons: {
        cancel: "Regresar",
        default: "Salir",
      },
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.login = "false";
        localStorage.removeItem("arregloSolicitudes");
        localStorage.removeItem("arregloPromociones");
        localStorage.removeItem("arregloProductos");
        localStorage.removeItem("arregloProductosDesglose");
        localStorage.removeItem("arregloProductosSubDesglose");
        localStorage.removeItem("preciosProductos");
        localStorage.removeItem("rutaSolicitud");
        localStorage.removeItem("idProducto");
        localStorage.removeItem("codigoProducto");
        localStorage.removeItem("precioElegido");
        localStorage.removeItem("unidadElegida");
        localStorage.removeItem("arregloDatosProducto");
        localStorage.removeItem("arregloSubcategoriaMarca");
        localStorage.removeItem("nombreSubcategoria");
        localStorage.removeItem("arregloMarcas");
        localStorage.removeItem("ProductosAdd");
        localStorage.removeItem("ultimaLista");
        localStorage.removeItem("arregloFavoritos");
        localStorage.removeItem("celular");
        localStorage.removeItem("idCliente");
        localStorage.removeItem("fullname");
        localStorage.removeItem("telefono");
        localStorage.removeItem("email");
        localStorage.removeItem("taller");
        localStorage.removeItem("direccion");
        localStorage.removeItem("sucursal");
        localStorage.removeItem("horaSolicitud");
        localStorage.removeItem("motoEnCamino");
        localStorage.removeItem("motoEnCaminoFecha");
        localStorage.removeItem("enProceso");
        localStorage.removeItem("enProcesoFecha");
        localStorage.removeItem("motoEnCaminoRegreso");
        localStorage.removeItem("regresoFecha");
        localStorage.removeItem("concluido");
        localStorage.removeItem("horaConcluido");

        window.location.href = "login.html";
      } else {
      }
    });
  });
  $("#procesoSolicitud").click(function () {
    var sucursal = $("#procesoSolicitud").val();
    var listaProductos = localStorage.ProductosAdd;

    if (listaProductos == "[]") {
      localStorage.sucursal = sucursal;
      window.location.href = "accion.html";
    } else {
      localStorage.sucursal = sucursal;
      window.location.href = "procesoSolicitud.html";
    }
  });
  $("#procesoSolicitud2").click(function () {
    var sucursal = $("#procesoSolicitud2").val();
    var listaProductos = localStorage.ProductosAdd;

    if (listaProductos == "[]") {
      localStorage.sucursal = sucursal;
      window.location.href = "accion.html";
    } else {
      localStorage.sucursal = sucursal;
      window.location.href = "procesoSolicitud.html";
    }
  });
  $("#procesoSolicitud3").click(function () {
    var sucursal = $("#procesoSolicitud3").val();
    var listaProductos = localStorage.ProductosAdd;

    if (listaProductos == "[]") {
      localStorage.sucursal = sucursal;
      window.location.href = "accion.html";
    } else {
      localStorage.sucursal = sucursal;
      window.location.href = "procesoSolicitud.html";
    }
  });
  $("#procesoSolicitud4").click(function () {
    var sucursal = $("#procesoSolicitud4").val();
    var listaProductos = localStorage.ProductosAdd;

    if (listaProductos == "[]") {
      localStorage.sucursal = sucursal;
      window.location.href = "accion.html";
    } else {
      localStorage.sucursal = sucursal;
      window.location.href = "procesoSolicitud.html";
    }
  });
  $("#procesoSolicitud5").click(function () {
    var sucursal = $("#procesoSolicitud5").val();
    var listaProductos = localStorage.ProductosAdd;

    if (listaProductos == "[]") {
      localStorage.sucursal = sucursal;
      window.location.href = "accion.html";
    } else {
      localStorage.sucursal = sucursal;
      window.location.href = "procesoSolicitud.html";
    }
  });
  //Displaying user email on home page
  $("#email1").html(localStorage.email);
  var imageHash =
    "http://sanfranciscodekkerlab.com/images/plantilla-correo/LOGOSDFblanco.png";
  $("#profilepic").attr("src", imageHash);
  $("#idCliente1").html(localStorage.idCliente);
  $("#fullname1").html(localStorage.fullname);
  $("#fullname2").html("Hola" + " " + localStorage.fullname);
  $("#taller1").html(localStorage.taller);
  $("#telefono1").html(localStorage.telefono);
  $("#celular1").html(localStorage.celular);
  $("#direccion1").html(localStorage.direccion);
  $("#sucursalElegida").html(localStorage.sucursal);
  $("#horaSolicitud").html(localStorage.horaSolicitud);
  $("#horaEnCamino").html(localStorage.motoEnCaminoFecha);
  $("#horaEnProceso").html(localStorage.enProcesoFecha);
  $("#horaRegreso").html(localStorage.regresoFecha);
  $("#horaConcluido").html(localStorage.horaConcluido);
  if (localStorage.concluido == 1) {
    $("#saludoConcluido").html(
      "Solicitud Concluida.<br>Gracias por realizar su solicitud con nosotros"
    );
  } else {
    $("#saludoConcluido").html("");
  }
});

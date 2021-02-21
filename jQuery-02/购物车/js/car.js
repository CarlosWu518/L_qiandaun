$(function() {
    $(".checkall").change(function() {
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
        if ($(".checkall").prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
    });
    $(".j-checkbox").change(function() {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });
    $(".increment").click(function() {
        var count = $(this).siblings(".itxt").val();
        count++;
        $(this).siblings(".itxt").val(count);
        var price = $(this).parents(".p-num").siblings(".p-price").html();
        price = price.substr(1);
        var sumPrice = (price * count).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + sumPrice);
        getSum();
    });
    $(".decrement").click(function() {
        var count = $(this).siblings(".itxt").val();
        if (count <= 1) {
            return false;
        }
        count--;
        $(this).siblings(".itxt").val(count);
        var price = $(this).parents(".p-num").siblings(".p-price").html();
        price = price.substr(1);
        var sumPrice = (price * count).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + sumPrice);
        getSum();
    });
    $(".itxt").change(function() {
        var count = $(this).val();
        var price = $(this).parents(".p-num").siblings(".p-price").html();
        price = price.substr(1);
        var sumPrice = (price * count).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + sumPrice);
        getSum();
    });
    getSum();

    function getSum() {
        var sumCount = 0;
        var sumMoney = 0;
        $(".itxt").each(function(index, element) {
            sumCount += parseInt($(element).val());
        });
        $(".amount-sum em").text(sumCount);
        $(".p-sum").each(function(index, element) {
            sumMoney += parseFloat($(element).text().substr(1));
        });
        $(".price-sum em").text("￥" + sumMoney.toFixed(2));
    }
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })
    $(".remove-batch").click(function() {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    $(".p-action").click(function() {
        $(this).parents(".cart-item").remove();
        getSum();
    });
})
/**
 * GiaPhuGroup Co., Ltd.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the GiaPhuGroup.com license that is
 * available through the world-wide-web at this URL:
 * https://www.giaphugroup.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    PHPCuong
 * @package     PHPCuong_Qty
 * @copyright   Copyright (c) 2018-2019 GiaPhuGroup Co., Ltd. All rights reserved. (http://www.giaphugroup.com/)
 * @license     https://www.giaphugroup.com/LICENSE.txt
 */
var config = {
    map: {
        '*': {
            // This code helps us to override the knockout HTML template file.
            'Magento_Checkout/template/minicart/item/default.html': 'PHPCuong_Qty/template/minicart/item/default.html',
            // The bellow codes help us to override the JS files
            'sidebar': 'PHPCuong_Qty/js/sidebar',
            'Magento_Checkout/js/view/minicart': 'PHPCuong_Qty/js/view/minicart'
        }
    }
};

<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
|--------------------------------------------------------------------------
| Display Debug backtrace
|--------------------------------------------------------------------------
|
| If set to TRUE, a backtrace will be displayed along with php errors. If
| error_reporting is disabled, the backtrace will not display, regardless
| of this setting
|
*/
defined('SHOW_DEBUG_BACKTRACE') OR define('SHOW_DEBUG_BACKTRACE', TRUE);

/*
|--------------------------------------------------------------------------
| File and Directory Modes
|--------------------------------------------------------------------------
|
| These prefs are used when checking and setting modes when working
| with the file system.  The defaults are fine on servers with proper
| security, but you may wish (or even need) to change the values in
| certain environments (Apache running a separate process for each
| user, PHP under CGI with Apache suEXEC, etc.).  Octal values should
| always be used to set the mode correctly.
|
*/
defined('FILE_READ_MODE')  OR define('FILE_READ_MODE', 0644);
defined('FILE_WRITE_MODE') OR define('FILE_WRITE_MODE', 0666);
defined('DIR_READ_MODE')   OR define('DIR_READ_MODE', 0755);
defined('DIR_WRITE_MODE')  OR define('DIR_WRITE_MODE', 0755);

/*
|--------------------------------------------------------------------------
| File Stream Modes
|--------------------------------------------------------------------------
|
| These modes are used when working with fopen()/popen()
|
*/
defined('FOPEN_READ')                           OR define('FOPEN_READ', 'rb');
defined('FOPEN_READ_WRITE')                     OR define('FOPEN_READ_WRITE', 'r+b');
defined('FOPEN_WRITE_CREATE_DESTRUCTIVE')       OR define('FOPEN_WRITE_CREATE_DESTRUCTIVE', 'wb'); // truncates existing file data, use with care
defined('FOPEN_READ_WRITE_CREATE_DESTRUCTIVE')  OR define('FOPEN_READ_WRITE_CREATE_DESTRUCTIVE', 'w+b'); // truncates existing file data, use with care
defined('FOPEN_WRITE_CREATE')                   OR define('FOPEN_WRITE_CREATE', 'ab');
defined('FOPEN_READ_WRITE_CREATE')              OR define('FOPEN_READ_WRITE_CREATE', 'a+b');
defined('FOPEN_WRITE_CREATE_STRICT')            OR define('FOPEN_WRITE_CREATE_STRICT', 'xb');
defined('FOPEN_READ_WRITE_CREATE_STRICT')       OR define('FOPEN_READ_WRITE_CREATE_STRICT', 'x+b');

/*
|--------------------------------------------------------------------------
| Exit Status Codes
|--------------------------------------------------------------------------
|
| Used to indicate the conditions under which the script is exit()ing.
| While there is no universal standard for error codes, there are some
| broad conventions.  Three such conventions are mentioned below, for
| those who wish to make use of them.  The CodeIgniter defaults were
| chosen for the least overlap with these conventions, while still
| leaving room for others to be defined in future versions and user
| applications.
|
| The three main conventions used for determining exit status codes
| are as follows:
|
|    Standard C/C++ Library (stdlibc):
|       http://www.gnu.org/software/libc/manual/html_node/Exit-Status.html
|       (This link also contains other GNU-specific conventions)
|    BSD sysexits.h:
|       http://www.gsp.com/cgi-bin/man.cgi?section=3&topic=sysexits
|    Bash scripting:
|       http://tldp.org/LDP/abs/html/exitcodes.html
|
*/
defined('EXIT_SUCCESS')        OR define('EXIT_SUCCESS', 0); // no errors
defined('EXIT_ERROR')          OR define('EXIT_ERROR', 1); // generic error
defined('EXIT_CONFIG')         OR define('EXIT_CONFIG', 3); // configuration error 
defined('EXIT_UNKNOWN_FILE')   OR define('EXIT_UNKNOWN_FILE', 4); // file not found
defined('EXIT_UNKNOWN_CLASS')  OR define('EXIT_UNKNOWN_CLASS', 5); // unknown class
defined('EXIT_UNKNOWN_METHOD') OR define('EXIT_UNKNOWN_METHOD', 6); // unknown class member
defined('EXIT_USER_INPUT')     OR define('EXIT_USER_INPUT', 7); // invalid user input
defined('EXIT_DATABASE')       OR define('EXIT_DATABASE', 8); // database error
defined('EXIT__AUTO_MIN')      OR define('EXIT__AUTO_MIN', 9); // lowest automatically-assigned error code
defined('EXIT__AUTO_MAX')      OR define('EXIT__AUTO_MAX', 125); // highest automatically-assigned error code

defined('SYSTEM_NAME')      OR define('SYSTEM_NAME', 'angulardemo');
defined('SYSTEM_EMAIL')      OR define('SYSTEM_EMAIL', '');
defined('LOGO_URL')      OR define('LOGO_URL', 'http://192.168.1.2/angulardemo/api/assets/logo_main.png');
// defined('LOGO_URL')      OR define('LOGO_URL', 'https://demo1.saptez.com/circuit-node/assets/images/header/logo_main.png');
defined('BASE_URL')      OR define('BASE_URL', 'http://192.168.1.2:4400/angulardemo/');
defined('BASE_PATH')      OR define('BASE_PATH', 'http://192.168.1.2/angulardemo/api/assets/');
defined('UPLOAD_URL')      OR define('UPLOAD_URL', substr(FCPATH, 0, -4).'api/assets/');
defined('IMAGETOOL')      OR define('IMAGETOOL', 'http://192.168.1.2/angulardemo/api/image-tool/index.php?src=');
defined('FRONT_URL')      OR define('FRONT_URL', 'http://192.168.1.2:4400/angulardemo/');
defined('ADMIN_URL')      OR define('ADMIN_URL', 'http://192.168.1.2/angulardemo/admin/');

// defined('SYSTEM_NAME')      OR define('SYSTEM_NAME', 'Circuit Node Technologies');
// defined('SYSTEM_EMAIL')      OR define('SYSTEM_EMAIL', '');
// defined('LOGO_URL')      OR define('LOGO_URL', 'https://demo1.saptez.com/circuit-node/api/assets/logo_main.png');
// defined('BASE_URL')      OR define('BASE_URL', 'https://demo1.saptez.com/circuit-node/');
// defined('BASE_PATH')      OR define('BASE_PATH', 'https://demo1.saptez.com/circuit-node/api/assets/');
// defined('UPLOAD_URL')      OR define('UPLOAD_URL', substr(FCPATH, 0, -4).'api/assets/');
// defined('IMAGETOOL')      OR define('IMAGETOOL', 'https://demo1.saptez.com/circuit-node/api/image-tool/index.php?src=');
// defined('FRONT_URL')      OR define('FRONT_URL', 'https://demo1.saptez.com/circuit-node/');
// defined('ADMIN_URL')      OR define('ADMIN_URL', 'https://demo1.saptez.com/circuit-node/admin/');

define('RESOURCE_PATH', substr(FCPATH, 0, -4)."assets/uploads/media/");
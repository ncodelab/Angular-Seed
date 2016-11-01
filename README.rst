.. image:: https://travis-ci.org/ncodelab/Angular-Seed.svg?branch=master
    :target: https://travis-ci.org/ncodelab/Angular-Seed

====================
Angular Seed Project
====================

.. contents:: Table of Contents

Dependencies
------------

You should (you can work without it, but it's very useful) install webpack globally:

.. code:: bash

  npm install webpack webpack-dev-server -g

Start application
-----------------

To start http server with your application run ``npm start``.
Server will start and listen locally on 8080.

You can change and any other settings in ``dev-server.js``.

Language Features
-----------------

We are using babel and polyfill for Promises. So you can use any feature of ES6
in your code. It'll be converted to ES5 on build.

Config file for babel is located in ``.babelrc``.

Documentation: `ES6 Features`_

Project Structure and Build System
----------------------------------

We use webpack as a build system. It combines js files and other assets and put them
to ``public/`` folder.

For assets (images, templates) use assets folder. It'll be copied to public/assets
on build.

For external js libraries, try to use npm and require or copy them on build if needed.
Find for ``angular/angular.min.js`` in ``webpack.config.js`` for example of copying.

Webpack config are located in ``webpack.config.js`` and ``webpack-production.config.js``.
Production config requires basic one, so place there things which will be needed only in production.

Documentation: Webpack_

Static checks
-------------

We are using eslint to check our code for style and other simple errors.

Config for eslint is located in ``.eslintrc``.

Unit tests
----------

Place them to ``test/`` folder, should end on ``.spec.js``.
To run use ``npm test`` or ``npm testOnce``

We are using karma and mocha (+ chai) for unit tests.

You can find config file in ``test/karma/conf.js``.

Documentation for test frameworks:

- For most uses: Chai_
- For promises: `Chai as Promised`_

End-to-end tests
----------------

You can start your application in real browser and run tests against it.
We are using protractor (Selenium inside) for it.

To start you need to run ``npm run e2e-start``.
Then you can run tests with ``npm run e2e``.

You can find config file in ``test/protractor/conf.js``.

Documentation: `Protractor Tutorial`_

Deploy and Build
----------------

Usually you don't have to build you project, you just use run ``npm start``.
In case if you need it you can run ``webpack`` (you need to have webpack installed globally).

To build minified version for production run ``npm run prod``.

Very simple deploy script is located in ``deploy/publish.sh``.

.. _Chai: http://chaijs.com/api/bdd/
.. _Chai as Promised: https://github.com/domenic/chai-as-promised
.. _Protractor Tutorial: http://www.protractortest.org/#/tutorial
.. _Webpack: https://webpack.github.io/
.. _ES6 Features: https://github.com/lukehoban/es6features

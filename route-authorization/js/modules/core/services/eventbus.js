(function (angular, jcs) {
    'use strict';

    /**
     * @ngdoc service
     * @name jcs-core.eventbus
     * @requires $rootScope
     *
     * @description
     * Provides a eventing mechanism when a user cna broadcast and subscribe to application wide events.
     */
    angular.module(jcs.modules.core.name).factory(jcs.modules.core.services.eventbus, [
        '$rootScope',
        function ($rootScope) {
            /**
             * @ngdoc function
             * @name subscribe
             * @methodOf jcs-core.eventbus
             *
             * @description
             * Subscribes a callback to the given application wide event
             *
             * @param {String} eventName The name of the event to subscribe to.
             * @param {Function} callback A callback which is fire when the event is raised.
             * @return {Function} A function tht can be called to unsubscrive to the event.
             */
            var subscribe = function (eventName, callback) {
                    return $rootScope.$on(eventName, callback);
                },

                /**
                 * @ngdoc function
                 * @name broadcast
                 * @methodOf jcs-core.eventbus
                 *
                 * @description
                 * Broadcasts the given event and data.
                 *
                 * @param {String} eventName The name of the event to broadcast.
                 * @param {object} data A data object that will be passed along with the event.
                 */
                broadcast = function (eventName, data) {
                    $rootScope.$emit(eventName, data);
                };

            return {
                subscribe: subscribe,
                broadcast: broadcast
            };
        }
    ]);
}(angular, jcs));

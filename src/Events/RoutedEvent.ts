import RoutedEventArgs = fletch.events.RoutedEventArgs;

namespace fletch.events {
    export class RoutedEvent<T extends RoutedEventArgs> extends nullstone.Event<T> {
    }
}
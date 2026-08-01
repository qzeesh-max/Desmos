#pragma once

namespace desm {
    // Annotation used to mark C++ classes/structs for automatic export to Java.
    // Example usage: class [[desm::export_java{}]] MyClass { ... };
    struct export_java {};
}
